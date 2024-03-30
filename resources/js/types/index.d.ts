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
    profile?: Profile
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
    description: string
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
    level_of_participant?: LevelOfParticipant,
    category_id?: number,
    language_id?: number,
    level_of_participant_id: number,
    payment_receipt?: string,
    certificate?: string,
    status_verifikasi: "0" | "1",
    creation?: Creation
    payment_receipt_path?: string
}

export interface LevelOfParticipant {
    id: number,
    level_name: string,
    description: string
}

export interface Slider {
    id: number,
    title: string,
    type: string,
    description: string,
    source: string
}

export interface Creation {
    id: number,
    title: string,
    id_participant: number,
    upload_location: string,
    upload_status: '0' | '1' | '2',
    participant?: Participant
}

export interface ExternalServiceConfig {
    id: number,
    service_name: string,
    protocol: string,
    host: string,
    port: number,
    timeout: number,
    username: string,
    password: string
}

export interface QuestionAndAnswer {
    id: number,
    question: string,
    answer: string,
}

export interface PageSection {
    id: number,
    language_id: number,
    section: string,
    content: string
}


export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User,
        roles: string[],
        menus: Menu[]
    };
    ziggy: Config & { location: string };
};
