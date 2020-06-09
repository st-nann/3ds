export interface IRegistryCreationRequest {
  name: string;
  isPublic: boolean;
}

export interface IRegistryAddMemberRequest {
  username: string;
  permission: string;
}

export interface IRegistrySetPermissionMemberRequest {
  permission: string;
}

export interface IRegistryMultiDeleteMembersRequest {
  memberIds: string[];
}

export interface IRegistryRobotAccountCreationRequest {
  name: string;
  description: DOMStringList;
  permission: {
    repository: string,
    helmChart: string
  };
}

export interface IRegistryRobotAccountSettingRequest {
  disabled: boolean;
}

export interface IRegistryWebhookRequest {
  address: string;
  auth_header: string;
  skip_cert_verify: boolean;
}

export interface IRegistryConfigurationAccessibleRequest {
  isPrivare: boolean;
}
