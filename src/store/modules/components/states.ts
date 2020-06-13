export class ComponentState {
  public toggleSidebar: boolean;
  public loading: boolean;
  public snackbar: [
    {
      id: string
      txt: string
      type: string,
    }
  ];
  public modalHandler: boolean;
  public actionHandler: boolean;
  public actionTypeHandler: string;

  constructor() {
    this.toggleSidebar = true;
    this.loading = false;
    this.snackbar = [
      {
        id: "",
        txt: "",
        type: ""
      }
    ];
    this.modalHandler = false;
    this.actionHandler = false;
    this.actionTypeHandler = "";
  }
}

export default ComponentState;
