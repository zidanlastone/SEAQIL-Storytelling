import { Config } from 'ziggy-js';


export type MenuPermission = {
    [key: string]: boolean
}

export type Permission = {
    id?: number,
    name: string
}

export interface RoleAuthorization {
    id?: number,
    name: string,
    permissions: Permission[]
}

export interface Menu {
    id?: number,
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
    id?: number,
    name: string,
    guard_name: string,
}

export interface Profile {
    id?: number,
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
    category_name: string,
    image?: string
}
export interface Language {
    id: number,
    code: string,
    name: string
}

export interface Participant {
    id: number,
    user: User,
    user_id: number,
    category?: Category,
    language?: Language,
    category_id?: number,
    language_id?: number,
    level_of_participant_id: number,
    payment_receipt?: string,
    certificate?: string,
    status_verifikasi: number
}

export interface LevelOfParticipant {
    id?: number,
    level_name: string
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User,
        menus: Menu[]
    };
    ziggy: Config & { location: string };
};
