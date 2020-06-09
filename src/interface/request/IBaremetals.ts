export interface IBaremetalCreationRequest {
  name: string;
  number: number;
  image: object;
  flavorId: string;
  securityGroups: object[];
  key: string[];
  bootVolume: boolean | object;
  networks?: object;
  floatingIps: string;
  autoBackup: string;
}

export interface IResizeRequest {
  flavorId: string;
}

export interface IMultiStartRequest {
  id: string[];
}

export interface IMultiStopRequest {
  id: string[];
}

export interface IMultiDestroyRequest {
  instanceId: string;
  floatingIp: string[];
  volumeId: string | boolean;
}

export interface IEditNameRequest {
  instance: {
    name: string
  };
}
