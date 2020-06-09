
export class ApiState {
  public lists: object[];
  public create: object;
  public delete: object;
  public openrc: object[];

  constructor() {
    this.lists = [];
    this.create = {};
    this.delete = {};
    this.openrc = [];
  }
}

export default ApiState;
