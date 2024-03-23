import NavLink from "@/Components/NavLink";
import { PageProps } from "@/types";
import { usePage } from '@inertiajs/react';

export function Sidebar() {

    const menus = usePage<PageProps>().props.auth.menus

    return (
        <div className="hidden md:block w-1/6 bg-white h-screen sticky top-0 left-0 shadow-md">
            <div className="flex flex-col gap-4 mt-16 justify-center w-full">
                {menus && menus.map(item => (
                    <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex" key={item.route}>
                        <NavLink href={route(item.route)} active={route().current(item.route)}>
                            {item.name}
                        </NavLink>
                    </div>
                ))}

            </div>
        </div>
    )
}