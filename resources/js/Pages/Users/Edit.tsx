import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel"
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { PageProps, User } from "@/types"
import { Transition } from "@headlessui/react";
import { Head, Link, useForm } from "@inertiajs/react"
import { FormEventHandler } from "react";
import UpdatePasswordForm from "../Profile/Partials/UpdatePasswordForm";

function Detail({ auth, user }: PageProps<{ user: User }>) {

  const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
    name: user.name,
    email: user.email,
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    patch(route('profile.update'));
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">User Detail</h2>}>
      <Head title="Admin | User Management" />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
          <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">

          <section className="max-w-xl">
            <div className="relative rounded overflow-auto">
              <header>
                <h2 className="text-lg font-medium text-gray-900">Profile Information</h2>
                <p className="mt-1 text-sm text-gray-600">
                  Detail mengenai akun pengguna
                </p>
              </header>
              <form onSubmit={submit} className="mt-6 space-y-6 max-w-xl">
                <h1>Detail akun pengguna</h1>
                <div>
                  <InputLabel htmlFor="name" value="Name" />
                  <TextInput
                    id="name"
                    className="mt-1 block w-full"
                    value={data.name as string}
                    onChange={(e) => setData('name', e.target.value)}
                    required
                    isFocused
                    autoComplete="name"
                  />
                  <InputError className="mt-2" message={errors.name} />
                </div>

                <div>
                  <InputLabel htmlFor="email" value="Email" />
                  <TextInput
                    id="email"
                    type="email"
                    className="mt-1 block w-full"
                    value={data.email as string}
                    onChange={(e) => setData('email', e.target.value)}
                    required
                    autoComplete="username"
                  />
                  <InputError className="mt-2" message={errors.email} />
                </div>

                <div className="flex items-center gap-4">
                  <PrimaryButton disabled={processing}>Save</PrimaryButton>
                  <Transition
                    show={recentlySuccessful}
                    enter="transition ease-in-out"
                    enterFrom="opacity-0"
                    leave="transition ease-in-out"
                    leaveTo="opacity-0"
                  >
                    <p className="text-sm text-gray-600">Saved.</p>
                  </Transition>
                </div>
              </form>
            </div>
          </section>

          </div>

          <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
            <UpdatePasswordForm className="max-w-xl" />
          </div>
          
        </div>
      </div>
    </AuthenticatedLayout>
  )
}

export default Detail