export class ComponentState {
  public loading: boolean;
  public snackbar: [
    {
      id: string
      txt: string
      type: string,
    }
  ];

  constructor() {
    this.loading = false;
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
