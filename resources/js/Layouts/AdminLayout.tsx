import React, { PropsWithChildren, ReactNode } from 'react'

import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import ApplicationLogo from '@/Components/ApplicationLogo'
import { Roles, User } from '@/types'
import { Link } from '@inertiajs/react'
import Dropdown from '@/Components/Dropdown'
import { NavbarCloseButton } from './Partials/NavbarCloseButton'
import ConditionalRender from '@/Components/ConditionalRender'

const subCategories = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Profil', href: route('profile.edit') },
]
const filters = [
  {
    id: 'partisipan',
    name: 'Peserta Lomba',
    options: [
      {
        value: 'participant',
        label: 'Peserta Lomba',
        href: route('participant.index')
      },
      {
        value: 'creation',
        label: 'Karya Peserta',
        href: route('creation.index')
      },
      {
        value: 'certificate',
        label: 'Sertifikat',
        href: route('creation.index')
      },
      {
        value: 'pengguna',
        label: 'Pengguna',
        href: route('admin.users.index')
      },
    ],
  },
  {
    id: 'master-data',
    name: 'Master Data',
    options: [
      {
        value: 'slider',
        label: 'Slider',
        href: route('slider.index')
      },
      {
        value: 'kategori',
        label: 'Kategori',
        href: route('category.index')
      },
      {
        value: 'bahasa',
        label: 'Bahasa',
        href: '/language'
      },
      {
        value: 'jenjang-pendidikan',
        label: 'Jenjang Pendidikan',
        href: route('level-of-participant.index')
      },
    ],
  },

  {
    id: 'settings',
    name: 'Pengaturan',
    options: [
      {
        value: 'external-service-config',
        label: 'External Service',
        href: route('admin.external-service-config.index')
      },
      {
        value: 'role',
        label: 'Role',
        href: route('admin.role.index')
      },
      {
        value: 'permission',
        label: 'Permission',
        href: route('admin.permission.index')
      },
    ],
  },

]

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}


function AdminLayout({ children, user, header, roles }: PropsWithChildren<{ user: User, roles: string[], header?: ReactNode }>) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transdiv"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transdiv"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  <div className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>
                    <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                      {subCategories.map((category) => (
                        <li key={category.name}>
                          <Link href={category.href} className={"block px-2 py-3 border-indigo-400 text-gray-900 focus:border-indigo-700"}>
                            {category.name}
                          </Link>
                        </li>
                      ))}

                      <ConditionalRender condition={roles.includes('participant')}>
                        <li>
                          <Link href={route('creation.index')} className={"block px-2 py-3 border-indigo-400 text-gray-900 focus:border-indigo-700"}>
                            Unggah Karya
                          </Link>
                        </li>
                      </ConditionalRender>
                      <ConditionalRender condition={roles.includes('administrator') || roles.includes('operator')}>
                        <li >
                          <Link href={route('admin.users.index')} className={"block px-2 py-3 border-indigo-400 text-gray-900 focus:border-indigo-700"}>
                            Pengguna
                          </Link>
                        </li>
                      </ConditionalRender>
                    </ul>
                    <ConditionalRender condition={roles.includes('administrator') || roles.includes('operator')}>
                      {filters.map((section) => (
                        <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
                          {({ open }) => (
                            <>
                              <h3 className="-mx-2 -my-3 flow-root">
                                <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                  <span className="font-medium text-gray-900">{section.name}</span>
                                  <span className="ml-6 flex items-center">
                                    {open ? (
                                      <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                    ) : (
                                      <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                    )}
                                  </span>
                                </Disclosure.Button>
                              </h3>
                              <Disclosure.Panel className="pt-6">
                                <div className="space-y-6">
                                  {section.options.map((option, optionIdx) => (
                                    <div key={option.value} className="flex items-center">
                                      <Link href={option.href}>
                                        <label
                                          htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                          className="ml-3 min-w-0 flex-1 text-gray-500"
                                        >
                                          {option.label}
                                        </label>
                                      </Link>
                                    </div>
                                  ))}
                                </div>
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      ))}
                    </ConditionalRender>

                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 py-2">
            <div className="shrink-0 flex-start items-center">
              <Link href="/">
                <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
              </Link>
            </div>

            <div className="hidden flex-end sm:flex sm:items-center sm:ms-6">
              <div className="ms-3 relative">
                <Dropdown>
                  <Dropdown.Trigger>
                    <NavbarCloseButton user={user} />
                  </Dropdown.Trigger>

                  <Dropdown.Content>
                    <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                    <Dropdown.Link href={route('logout')} method="post" as="button">
                      Log Out
                    </Dropdown.Link>
                  </Dropdown.Content>
                </Dropdown>
              </div>
            </div>

            <button
              type="button"
              className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 md:hidden lg:hidden"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <span className="sr-only">Filters</span>
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path
                  className={!mobileFiltersOpen ? 'inline-flex' : 'hidden'}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
                <path
                  className={mobileFiltersOpen ? 'inline-flex' : 'hidden'}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 lg:grid-cols-6">
              <div className="hidden lg:block">
                <h3 className="sr-only">Menu</h3>
                <ul role="list" className="sticky space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                  {/* untuk menu */}
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href}>{category.name}</a>
                    </li>
                  ))}

                  <ConditionalRender condition={roles.includes('participant')}>
                    <li>
                      <Link href={route('creation.index')}>
                        Unggah Karya
                      </Link>
                    </li>
                  </ConditionalRender>
                  <ConditionalRender condition={roles.includes('administrator') || roles.includes('operator')}>
                    <li >
                      <Link href={route('admin.users.index')}>
                        Pengguna
                      </Link>
                    </li>
                  </ConditionalRender>
                </ul>

                <ConditionalRender condition={roles.includes('administrator') || roles.includes('operator')}>
                  {filters.map((section) => (
                    <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-2">
                      {({ open }) => (
                        <>
                          <h3 className="-my-3 flow-root">
                            <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                              <span className="font-medium text-gray-900">{section.name}</span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                ) : (
                                  <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-3">
                            <div className="space-y-2">
                              {section.options.map((option, optionIdx) => (
                                <div key={option.value} className="flex items-center">
                                  <Link href={option.href} className="ml-3 text-sm text-gray-600">
                                    {option.label}
                                  </Link>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </ConditionalRender>

              </div>

              {/* Product grid */}
              <div className="lg:col-span-5">
                {header && (
                  <header className="bg-white">
                    <div className="max-w-8xl mx-auto sm:px-6 space-y-6 py-4">{header}</div>
                  </header>
                )}

                {children}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default AdminLayout