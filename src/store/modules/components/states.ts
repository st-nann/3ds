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
  }
}

export default ComponentState;
