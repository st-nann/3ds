import { IMenu } from "@/interface/data/base/IServices";
import { IAliasListMenu, IAliasMenu, IFilterMenu } from "@/interface/IServices"; 
import { decrypt } from "@/services/Authentication";
import _ from "lodash";

export function getImageFromStorse(name: string, token: string): string {
    return `https://firebasestorage.googleapis.com/v0/b/.appspot.com/o/${name}.png?alt=media`;
}

export async function retry (func: any, param: object, page: string) {
  localStorage.page = page;
  await retryLoop(func, param, page, 0);
}

async function retryLoop (func: any, param: object, page: string, count: number) {
  if (count < 3 && page === localStorage.page) {
    localStorage.callAPI = count;
    await func(param).then(() => {}, () => {
      setTimeout(() => {
        retryLoop(func, param, page, count + 1);
      }, 5000);
    });
  }
}

export function uuidv4 () {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0;
    const v = c === "x" ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export function doConvertCurrency (money: number): number {
  return _.ceil(money / 1000000, 2);
}

export function doConvertIp4ToInt (ip: string): number {
  return ip.split(".").reduce((int, oct) => (int << 8) + parseInt(oct, 10), 0) >>> 0;
}

const isIp4InCidr = ip => cidr => {
  const [range, bits = 32] = cidr.split("/");
  const mask = ~(2 ** (32 - bits) - 1);
  return (doConvertIp4ToInt(ip) & mask) === (doConvertIp4ToInt(range) & mask);
};

export function isIp4InCidrs (ip: string, cidrs: object[]): boolean {
  return cidrs.some(isIp4InCidr(ip));
}

export function doReplaceAll (regExp: any, txt: string, char: string): string {
  while (regExp.test(txt)) { txt = txt.replace(regExp, char); }
  return txt;
}

function doFilterMenuPermission (data: IFilterMenu) {
  const alias: IAliasListMenu = {
    menu: [
      { name: "security-group", menu_name: "cloud_firewall" },
      // { name: "lbaasv2", menu_name: "loadbalancers" },
      { name: "router", menu_name: "routers" }
    ]
  };
  return _.filter(data.menu, (item: any) => {
    const findAlias: IAliasMenu | undefined = _.find(alias.menu, res => {
      return (
        _.includes(item[_.toLower(item.text)], res.menu_name) ||
        item.value === res.menu_name
      );
    });
    return (
      (_.isUndefined(findAlias) || checkNeutronExtension(findAlias.name)) &&
      (
        !(item.permission || item.hypervisor || item.role || item.screen) ||
        (
          item.permission &&
          data.description[item.permission] &&
          data.description[item.permission] === "1" &&
          (item.screen ? data.breakpoint && data.breakpoint[item.screen] : true)
        ) ||
        (
          item.screen
            ? data.description[item.permission]
              ? data.description[item.permission] === "1" &&
                data.breakpoint &&
                data.breakpoint[item.screen]
              : data.breakpoint && data.breakpoint[item.screen]
            : false
        ) ||
        (item.hypervisor && item.hypervisor === data.hypervisor) ||
        (item.role && !_.isUndefined(_.find(data.roles, { "name": item.role })))
      )
    );
  });
}

function checkNeutronExtension (aliaName: string): object | undefined {
  const extensions: object[] = localStorage["neutron-extension"]
    ? JSON.parse(localStorage["neutron-extension"])
    : [];
  return _.find(extensions, { alias: aliaName });
}

export function doFilterMenu (data: IFilterMenu): IMenu {
  const menu = doFilterMenuPermission(data);
  return {
    menu: _.map(menu, (item: any) => {
      data.menu = data.page === "sidebar" ? item[_.toLower(item.text)] : menu;
      const menuList = (
        data.page === "sidebar"
          ? typeof item[_.toLower(item.text)] === "object"
            ? doFilterMenuPermission(data)
            : item[_.toLower(item.text)]
          : menu
      );
      return data.page === "sidebar"
        ? { ...item, [_.toLower(item.text)]: menuList }
        : { ...item };
    })
  };
}

export function doFilterDefaultNetwork (networks: object[]): object[] {
  const storageToken: string | null = window.localStorage.getItem("token")
    ? window.localStorage.getItem("token")
    : "";
  const token = decrypt(storageToken);
  return  networks
    ? _.filter(networks, { project_id: token["project-id"], router: false })
    : [];
}

function doFilterPublicNetwork (networks: object[]): object[] {
  return (
    networks
    ? _.filter(networks, { is_default: true, router: true })
    : []
  );
}

export function doFilterNetworkLists (networks: object[]): object[] {
  return _.concat(
    doFilterDefaultNetwork(networks),
    doFilterPublicNetwork(networks)
  );
}

export function doGetSubnetAll (networks: any[]): object[] {
  const subnets: object[] = [];
  _.forEach(networks, network => { subnets.push(network.subnet); });
  return _.flattenDeep(subnets);
}

export function doGetSubnetWithHeader (netwrokList: any[], subnetList: any[]): object[] {
  let networks: any = {};
  const lists: object[] = [];
  let networkName: string = "";
  _.forEach(subnetList, item => {
    networks = _.find(netwrokList, ["network_id", item.network_id]);
    if (networks) {
      if (networkName !== networks.network_name) {
        lists.push(
          { divider: true },
          { header: `${networks.network_name} (${networks.network_id.substring(0, 8)})` },
          { subnet: item }
        );
      } else {
        lists.push({ subnet: item });
      }
      networkName = networks.network_name;
    } else {
      lists.push({ subnet: item });
    }
  });
  return lists;
}

export function doGetPrefixIp (cidr: string): string {
  const replace: string = _.replace(cidr, "/", ".");
  const split: string[] = _.split(replace, ".");
  const liastSplit: string | undefined = _.last(split);
  const subnetMask: number = liastSplit ? parseInt(liastSplit) : 0;
  switch (true) {
    case subnetMask < 8: return "";
    case subnetMask < 16: return `${split[0]}`;
    case subnetMask < 24: return `${split[0]}.${split[1]}`;
    case subnetMask < 32: return `${split[0]}.${split[1]}.${split[2]}`;
    default: return `${split[0]}.${split[1]}.${split[2]}.${split[3]}`;
  }
}
