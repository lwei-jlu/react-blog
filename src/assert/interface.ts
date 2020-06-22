export interface RouteInterface {
    path: string,
    component?: any,
    routes?: Array<any>,
    exact?: boolean
}

export interface StoreState {
    num: number;
    value?: string;
}

export interface IStoreState {
    counter: StoreState;
    fetchapi: fetchAPIState;
}

export interface fetchAPIState {
    data: any;
    isFetching: boolean,
}