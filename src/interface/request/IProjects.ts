export interface IProjectCreationRequest {
  unscopeToken: string;
  create: {
    email: string[];
    name: string;
    phone: string;
    countryCode: string;
  };
}

export interface IProjectUpdateRequest {
  update: {
    email: string;
    phone_number: string;
    country_code: string;
  };
}

export interface IProjectUpdateProfileRequest {
  first_name: string;
  last_name: string;
  address: string;
  member_type: string;
  company_name: string;
  picture: string;
}

export interface IProjectFetchRequest {
  unscopeToken: string;
}

export interface IProjectSwitchRequest {
  projectId: string;
  unscopeToken: string;
  email: string;
  projectName: string;
}

export interface IProjectInviteMemberRequest {
  projectId: string;
  projectName: string;
  emails: string;
  role: string;
  inviterName: string;
  inviterEmail: string;
}

export interface IProjectReInviteMemberRequest {
  projectId: string;
  email: string;
}

export interface IProjectResendInviteMemberRequest {
  email: string;
  inviterName: string;
  inviterEmail: string;
  projectName: string;
}

export interface IProjectSummaryInviteMemberRequest {
  emails: string;
}

export interface IProjectLeaveInviteMemberRequest {
  unscopeToken: string;
}

export interface IProjectChangeRoleRequest {
  email: string;
  requestRole: string;
  oldRole: string;
}

export interface IProjectChangeTypeRequest {
  contact_name?: string;
  tax_number?: string;
  company_name?: string;
  country_code?: string;
  contact_phone?: string;
  address?: string;
  document?: string;
  type?: string;
}
