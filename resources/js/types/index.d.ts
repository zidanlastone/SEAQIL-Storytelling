import { Config } from 'ziggy-js';


export type MenuPermission = {
    [key: string]: boolean
}

export type Permission = {
    name: string
}

export interface RoleAuthorization {
    name: string,
    permissions: Permission[]
}

export interface Menu {
    language_id: number,
    name: string,
    route: string,
    roles: string,
    parent_menu?: string
}

export interface User {
    id: number,
    name: string,
    email: string,
    password: string,
    email_verified_at?: string,
    created_at?: string,
    roles: RoleAuthorization[]
}

export interface Roles {
    name: string,
    guard_name: string,
}

export interface Profile {
    gender: 'L' | 'P',
    whatsapp_contact: string,
    parent_contact: string,
    institution: string,
    country: string,
    province: string,
    city: string,
    address: string,
    pwd?: string
}

export interface Category {
    id: number,
    category_name: string
}
export interface Language {
    id: number,
    code: string,
    name: string
}

export interface Participant {
    id: number,
    user: User,
    category?: Category,
    language?: Language,
    category_id?: string,
    language_id?: string,
    level_of_participant_id: string,
    payment_receipt?: string,
    certificate?: string,
    status_verifikasi: 0 | 1
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User,
        menus: Menu[]
    };
    ziggy: Config & { location: string };
};
