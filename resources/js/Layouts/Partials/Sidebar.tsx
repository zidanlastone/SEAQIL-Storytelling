import NavLink from "@/Components/NavLink";

export function Sidebar() {
  return (
      <div className="hidden md:block w-1/6 bg-white h-screen">
          <div className="flex flex-col gap-4 mt-16 justify-center">
              <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex mx-auto">
                  <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                      Dashboard
                  </NavLink>
              </div>

              
              <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex mx-auto">
                  <NavLink href={route('admin.users.index')} active={route().current('admin.users.index')}>
                      User Management
                  </NavLink>
              </div>
          </div>
      </div>
  )
}