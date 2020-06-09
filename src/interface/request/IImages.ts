export interface IImageTakeSnapshotRequest {
  id: string;
  name: string;
}

export interface IImageRestoreRequest {
  instanceId: string;
}

export interface IImageManageMembersRequest {
  projectIds: string[];
}
