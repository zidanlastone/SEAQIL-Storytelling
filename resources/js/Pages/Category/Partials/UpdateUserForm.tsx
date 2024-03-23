import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import PrimaryButton from '@/Components/PrimaryButton'
import TextInput from '@/Components/TextInput'
import { User } from '@/types'
import { toLocalDatetime } from '@/utils/date'
import { Transition } from '@headlessui/react'
import { useForm } from '@inertiajs/react'
import { FormEventHandler } from 'react'

function UpdateUserForm({ user, className }: { user: User, className?: string }) {

  const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
    name: user.name,
    email: user.email,
    email_verified_at: user.email_verified_at,
    created_at: user.created_at,
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    patch(route('admin.users.update'));
  };

  return (
    <section className={className}>
      <div className="relative rounded overflow-auto">
        <header>
          <h2 className="text-lg font-medium text-gray-900">Profile Information</h2>
          <p className="mt-1 text-sm text-gray-600">
            Detail mengenai akun pengguna
          </p>
        </header>
        <form onSubmit={submit} className="mt-6 space-y-6 max-w-xl">
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

          <div>
            <InputLabel htmlFor="email_verified_at" value="Email Verified At" />
            <TextInput
              id="email_verified_at"
              type="datetime-local"
              className="mt-1 block w-full"
              value={toLocalDatetime(data.email_verified_at)}
              onChange={(e) => setData('email_verified_at', e.target.value)}
              required
              autoComplete="date"
            />
            <InputError className="mt-2" message={errors.email_verified_at} />
          </div>

          {data.created_at ? (
            <div>
              <InputLabel htmlFor="created_at" value="Created At" />
              <TextInput
                id="email"
                type="datetime-local"
                className="mt-1 block w-full"
                value={toLocalDatetime(data.created_at)}
                onChange={(e) => setData('created_at', e.target.value)}
                autoComplete="date"
                disabled
              />
              <InputError className="mt-2" message={errors.created_at} />
            </div>
          ) : null}

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
  )
}

export default UpdateUserForm