export interface IStorageVolumeCreationRequest {
  name: string;
  volume_type: string;
  size: string | number;
  availability_zone: string;
  imageRef?: string;
  snapshot_id?: string;
  sourceVolumeId?: string;
}

export interface IStorageVolumeSetBootableRequest {
  "os-set_bootable": {
    bootable: string
  };
}

export interface IStorageVolumeExtendRequest {
  new_size: number;
  status: string;
}

export interface IStorageVolumeChangeTypeRequest {
  "os-retype": {
    new_type: string,
    migration_policy: string
  };
}

export interface IStorageVolumeTransferRequest {
  volumeId: string;
  name: string;
  receiverEmail: string;
  senderEmail: string;
  senderName: string;
}

export interface IStorageVolumeAcceptTransferRequest {
  transferId: string;
  authKey: string;
}

export interface IStorageVolumeSnapshotCreationRequest {
  name: string;
  volume_id: string;
}
