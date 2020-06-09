import { IMenu } from "@/interface/data/base/IServices";

export function getSidebarMenu(): IMenu {
  return {
    menu: [
      {
        text: "Project",
        value: "project",
        icon: "group"
      },
      {
        text: "Billing",
        value: "billing",
        role: "biller",
        icon: "account_balance_wallet"
      },
      {
        text: "Document",
        value: "document",
        icon: "description",
        screen: "xs"
      },
      {
        text: "Support",
        value: "support",
        icon: "help",
        screen: "xs"
      },
      {
        text: "API",
        value: "api",
        permission: "enable_api_access",
        icon: "settings_ethernet",
        screen: "xs"
      },
      {
        text: "Marketplace",
        value: "marketplace",
        permission: "enable_marketplace",
        image: "marketplace-white"
      },
      {
        text: "COMPUTE",
        compute: [
          {
            text: "Instances",
            value: "instances",
            image: "instances-white"
          },
          {
            text: "Images",
            value: "images",
            image: "snapshots-white"
          },
          {
            text: "Auto Backup",
            value: "auto_backup",
            permission: "auto_back_up",
            image: "autobackup-white"
          },
          {
            text: "Keypairs",
            value: "keypairs",
            image: "keypairs-white"
          }
        ]
      },
      {
        text: "DEDICATE",
        permission: "enable_baremetal",
        dedicate: [
          {
            text: "Baremetal",
            value: "baremetal",
            permission: "enable_baremetal",
            image: "instances-white"
          }
        ]
      },
      {
        text: "CONTAINER",
        permission: "enable_container",
        container: [
          {
            text: "Registries",
            value: "registries",
            permission: "enable_container",
            image: "registry-white"
          },
          {
            text: "Users",
            value: "users",
            permission: "enable_container",
            image: "user-white"
          }
        ]
      },
      {
        text: "STORAGE",
        permission: "enable_volume",
        storage: [
          {
            text: "Volumes",
            value: "volumes",
            permission: "enable_volume",
            image: "disk-white"
          }
        ]
      },
      {
        text: "NETWORK",
        network: [
          {
            text: "VPC Networks",
            value: "networks",
            permission: "enable_advance_network",
            image: "network-white"
          },
          {
            text: "Routers",
            value: "routers",
            permission: "enable_advance_network",
            image: "router-white"
          },
          {
            text: "Cloud Firewalls",
            value: "cloud_firewall",
            hypervisor: "kvm",
            image: "firewall-white"
          },
          {
            text: "External IPs",
            value: "external_ip",
            image: "floatingip-white"
          },
          {
            text: "Load Balancers",
            value: "loadbalancers",
            permission: "enable_load_balance",
            image: "load-balancer-white"
          },
          {
            text: "DNS",
            value: "dns",
            permission: "enable_dns",
            image: "dns-white"
          }
        ]
      },
      {
        text: "HYBRID CONNECTIVITY",
        permission: "enable_vpn",
        "hybrid connectivity": [
          {
            text: "VPN",
            value: "vpn",
            permission: "enable_vpn",
            image: "vpn-white"
          }
        ]
      },
      {
        text: "MACHINE LEARNING",
        permission: "enable_nvision",
        "machine learning": [
          {
            text: "NVISION",
            value: "nvision",
            permission: "enable_nvision",
            image: "ai-white"
          }
        ]
      }
    ]
  };
}
  