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
import { toLocalDatetime } from "@/utils/date";
import UpdateUserForm from "./Partials/UpdateUserForm";

function Detail({ auth, user }: PageProps<{ user: User }>) {

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">User Detail</h2>}>
      <Head title="Admin | User Management" />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
          <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
            <UpdateUserForm user={user} className="max-w-xl" />
          </div>

        </div>
      </div>
    </AuthenticatedLayout>
  )
}

export default Detail