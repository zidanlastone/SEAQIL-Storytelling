import { Config } from 'ziggy-js';

export interface User {
    id: number,
    name: String,
    email: String,
    email_verified_at?: String,
    password: String,
    created_at: String
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
    ziggy: Config & { location: string };
};
