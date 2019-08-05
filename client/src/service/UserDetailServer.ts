import * as Rx from 'typeless/rx';
import { UserDetail } from '../types'

interface UserDetailServer {
    fetchAllUserDetails: () => Promise<UserDetail[]>;
};

const userDetailMockServer: UserDetailServer = {
    fetchAllUserDetails: () => {
        const userDetails: UserDetail[] = [
            {userId: '1', sex: 'man', age: 20, email: 'foo@example.com'},
            {userId: '2', sex: 'woman', age: null, email: 'bar@example.co.jp'},
            {userId: '3', sex: 'unknown', age: 14, email: null},
        ]

        return new Promise<UserDetail[]>((resolve, reject) => {
            resolve(userDetails);
        })
    }
}

export class UserDetailService {
    constructor(private server: UserDetailServer){}

    public fetchAllUserDetails(): Rx.Observable<UserDetail[]> {
        return Rx.fromPromise<UserDetail[]>(this.server.fetchAllUserDetails());
    }
}

export const userDetailsService = new UserDetailService(userDetailMockServer);
