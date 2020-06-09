export interface INetworkCreationRequest {
  name: string;
  cidr: string;
  cloudFirewallEnabled: boolean;
  dhcpEnabled: boolean;
  gatewayIp?: string;
  routerId?: string;
  availibilityZone?: string;
}

export interface INetworkUpdateRequest {
  name?: string;
  port_security_enabled?: boolean;
}
