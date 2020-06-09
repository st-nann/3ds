export interface IRegistryParam {
  id: string;
}

export interface IRegistryExistParam {
  name: string;
}

export interface IRegistryMultiDeleteParam {
  ids: string[];
}

export interface IRegistryImageParam {
  id: string;
  page?: string;
  limits?: string;
}

export interface IRegistryMultiDeleteImagesParam {
  imageIds: string[];
}

export interface IRegistryTagParam {
  tagName: string;
  registryName: string;
  imageName: string;
}

export interface IRegistryMultiDeleteTagsParam {
  tagNames: string[];
  registryName: string;
  imageName: string;
}

export interface IRegistryMemberParam {
  id: string;
  username: string;
}

export interface IRegistrySetPerrmissionMemberParam {
  id: string;
  memberId: string;
}

export interface IRegistryRobotAccountParam {
  id: string;
  robotAccountId: string;
}

export interface IRegistryDeleteRobotAccountParam {
  id: string;
  robotAccountIds: string[];
}

export interface IRegistryWebhookParam {
  id: string;
  webhookId: string;
}
