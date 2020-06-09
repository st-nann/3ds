export interface IExternalIpCreationRequest {
  name: string;
}

export interface IExternalIpAssociateRequest {
  portId: string;
  ip: string;
}
