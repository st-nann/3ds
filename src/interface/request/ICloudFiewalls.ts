export interface ICloudFirewallCreationRequest {
  name: string;
}

export interface ICloudFirewallRuleCreationRequest {
  direction: string;
  ethertype: string;
  protocol: string;
  remote?: string;
  cidr?: string;
  portMin?: number;
  portMax?: number;
}
