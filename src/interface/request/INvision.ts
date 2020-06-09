export interface IServiceCreationRequest {
  name: string;
  tenant_id: string;
  service_type: string;
  service_plan: string;
}

export interface IServiceMultiDeleteRequest {
  ids: string[];
}

export interface IServiceUpdateRequest {
  status?: string;
  service_plan?: string;
  service_configuration?: string;
}
