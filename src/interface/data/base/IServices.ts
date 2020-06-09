type Key = string | number;

export interface IColor {
  color: {
    [key in Key]: string;
  };
}

export interface ICountryCode {
  contries: {
    code: string,
    name: string,
    dialCode: number,
    phoneFormat: string,
  }[];
}

export interface IMenu {
  menu: {
    text: string;
    value?: string;
    permission?: string;
    hypervisor?: string;
    image?: string;
    icon?: string;
    divider?: boolean;
    [key: string]: {
      text: string;
      value: string;
      image: string;
      permission?: string;
      hypervisor?: string;
    }[] | string | boolean | undefined;
  }[];
}

export interface IMessageAlert {
  messages: {
    title: string;
    text: string;
    page: string;
  }[];
}

export interface ITime {
  backup: {
    text: string;
    value: string;
  }[];
}

export interface IPrice {
  router: {
    default: number,
    extra: {
      ha: number
    }
  };
}

export interface IPassword {
  validate: {
    text: string;
    option: number;
    correct: boolean;
  }[];
  specialCharacters: string[];
}
    