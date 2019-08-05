export type Nullable<T> = T | null;

interface UserInfo {
    userId: string,
    name: string,
    sex: Nullable<string>,
    age: Nullable<number>,
    email: Nullable<string>,
}

export type User = Pick<UserInfo, 'userId' | 'name'>
export type UserDetail = Omit<UserInfo, 'name'>
