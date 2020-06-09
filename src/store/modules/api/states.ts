
export class ApiState {
  public lists: object[];
  public create: object;
  public edit: object;
  public delete: object;
  public join: object;
  public unjoin: object;

  constructor() {
    this.lists = [];
    this.create = {};
    this.edit = {};
    this.delete = {};
    this.join = {};
    this.unjoin = {};
  }
}

export default ApiState;
