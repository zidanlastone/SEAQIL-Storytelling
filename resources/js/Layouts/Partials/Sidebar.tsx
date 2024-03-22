import NavLink from "@/Components/NavLink";
import { PageProps } from "@/types";
import { usePage } from '@inertiajs/react';

export function Sidebar() {
    return (
        <div className="hidden md:block w-1/6 bg-white h-screen sticky top-0 left-0 shadow-md">
            <div className="flex flex-col gap-4 mt-16 justify-center w-full">
                <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                    <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                        Dashboard
                    </NavLink>
                </div>
                <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                    <NavLink href={route('participant')} active={route().current('participant')}>
                        Participant
                    </NavLink>
                </div>
                <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex w-full">
                    <NavLink href={route('admin.users.index')} active={route().current('admin.users.index')}>
                        User Management
                    </NavLink>
                </div>
            </div>
        </div>
    )
}