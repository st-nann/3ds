export class ComponentState {
  public toggleSidebar: boolean;
  public loading: { [key: string]: boolean }[];
  public snackbar: [
    {
      id: string
      txt: string
      type: string,
    }
  ];
  public actionHandler: boolean;

  constructor() {
    this.toggleSidebar = true;
    this.loading = [];
    this.snackbar = [
      {
        id: "",
        txt: "",
        type: ""
      }
    ];
    this.actionHandler = false;
  }
}

export default ComponentState;
