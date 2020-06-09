export interface ILoadBalancerCreationRequest {
  listener: {
    protocol: string,
    port: number,
    timeout: number,
    l7policies?: [
      {
        action: string,
        redirectPrefix: string,
        redirectUrl: string,
        redirectHttpCode: number,
        l7rules: [
          {
            type: string,
            key: string,
            invert: boolean,
            compairType: string,
            value: string
          }
        ]
      }
    ],
    pool: {
      algorithm: string,
      protocol: string,
      members: [
        {
          address: string,
          port: number
        }
      ],
      healthmonitor: {
        delay: number,
        expectedCode: string,
        maxRetires: number,
        timeout: number,
        type: string,
        urlPath: string
      }
    }
  };
}

export interface ILoadBalancerUpdateRequest {
  name: string;
}

export interface ILoadBalancerDeleteRequest {
  loadbalancers: [{
    id: string,
    floatingIps: string[]
  }];
}
