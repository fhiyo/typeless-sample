import * as Rx from 'typeless/rx';

interface CountServer {
    fetchSuccNumber: (number: number) => Promise<number>;
}

const countMockServer: CountServer = {
    fetchSuccNumber: (number: number) => {
        return new Promise<number>((resolve, reject) => {
            resolve(number + 1);
        })
    }
}

export class CountService{
    constructor(private server: CountServer){}

    public fetchSuccNumber(number: number) : Rx.Observable<number>{
        return Rx.fromPromise<number>(this.server.fetchSuccNumber(number));
    }
}

export const countService = new CountService(countMockServer);
