export interface IPortCreationRequest {
  port: {
    network_id: string,
    fixed_ips: [
      {
        subnet_id: string,
        ip_address?: string
      }
    ],
    mac_address?: string,
    port_security_enabled: boolean,
    security_groups: object[]
  };
}

export interface IPortUpdateRequest {
  port: {
    allowed_address_pairs: [
      {
        ip_address: string,
        mac_address: string
      }
    ]
  };
}

export interface IPortSetCloudFirewallRequest {
  status: boolean;
}
