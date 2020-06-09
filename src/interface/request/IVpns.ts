export interface IVpnCreationRequest {
  name: string;
  cloudRouter: string;
  cloudSubnet: string;
  getewayIp: string;
  remoteIp: string;
  remoteCidr: string;
  sharedSecret: string;
  ikePolicy: {
    ikeVersion: string;
    authAlgorithm: string;
    encryptionAlgorithm: string;
    pfs: string;
    lifetime: number;
  };
  ipsecPolicy: {
    authAlgorithm: string;
    encryptionAlgorithm: string;
    pfs: string;
    lifetime: number;
  };
  dpd: {
    timeout: number;
    interval: string;
  };
}

export interface IVpnUpdateRequest {
  name: string;
  cloudSubnet: string;
  remoteCidr: string;
}
