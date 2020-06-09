import { ILoadBalancerCreationRequest } from "@/interface/request/ILoadBalancers";

export interface ILoadBalancerFormat {
  l7policies: {
    format: {
      action: string;
      redirectPrefix: string;
      redirectUrl: string;
      redirectHttpCode: number;
      l7rules: [
        {
          type: string;
          key: string;
          invert: false,
          compairType: string;
          value: string;
        }
      ]
    },
    l7rules: {
      format: {
        type: string;
        key: string;
        invert: false,
        compairType: string;
        value: string;
      }
    }
  };
  pool: {
    format: {
      algorithm: string;
      protocol: string;
      members: [
        {
          address: string;
          port: number;
        }
      ],
      healthmonitor: {
        delay: number;
        expectedCode: string;
        maxRetires: number;
        timeout: number;
        type: string;
        urlPath: string;
      }
    },
    members: {
      format: {
        port: number;
      }
    }
  };
}

export interface ILoadBalancer extends ILoadBalancerFormat, ILoadBalancerCreationRequest {}
    