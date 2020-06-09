export interface IInstanceCreationRequest {
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

export interface IAttachVolumeRequest {
  volumeId: string;
}

export interface IDetachVolumeRequest {
  id: string;
  volumeId: string;
}

export interface IAttachNetworkRequest {
  id: string;
  portId: string;
}

export interface IAttachCloudFirewallRequest {
  securityGroupId: string;
  securityGroups: object[];
}

export interface IRescueRequest {
  rescue: string;
}

export interface IRebuildRequest {
  image_ref: string;
}

export interface ICleanInstallRequest {
  image_ref: string;
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

export interface IUpdateAutoBackupRequest {
  status: string;
}
