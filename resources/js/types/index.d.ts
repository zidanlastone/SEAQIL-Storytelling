import { Config } from 'ziggy-js';

export interface User {
    id: number,
    name: string,
    email: string,
    password: string,
    email_verified_at?: string,
    created_at?: string
}

export interface Roles {
    name: string,
    guard_name: string,
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
    ziggy: Config & { location: string };
};
