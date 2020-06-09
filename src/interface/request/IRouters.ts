export interface IRouterCreationRequest {
  name: string;
  networkId: string;
}

export interface IRouterRenameRequest {
  name: string;
}

export interface IRouterUpdateStaticRoutesRequest {
  routes: [
    {
      destination: string,
      nexthop: string
    }
  ];
}

export interface IRouterAddInterfaceRequest {
  subnetId: string;
}
