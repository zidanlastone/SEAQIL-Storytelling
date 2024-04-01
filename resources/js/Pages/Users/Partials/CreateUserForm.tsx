import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import SelectInput from '@/Components/SelectInput';
import TextInput from '@/Components/TextInput';
import { PageProps, Roles } from '@/types';
import { Transition } from '@headlessui/react';
import { Link, useForm, usePage } from '@inertiajs/react';
import { FormEventHandler, useEffect, useState } from 'react';

function CreateUserForm({ onComplete, className, roles }: { onComplete?: () => void, className?: string, roles?: Roles[] }) {

  const { data, setData, post, processing, errors, reset, wasSuccessful, recentlySuccessful } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    role: ''
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    post(route('admin.users.store'));
  };

  useEffect(() => {
    return () => {
      reset('password', 'password_confirmation');
    };
  }, []);

  useEffect(() => {
    if (wasSuccessful) {
      if (typeof onComplete == 'function') {
        setTimeout(onComplete, 2000)
      }
    }
  }, [wasSuccessful])

  return (
    <section className={className}>
      <header>
        <h2 className="text-lg font-medium text-gray-900">Tambah Data Pengguna</h2>
      </header>

      <form onSubmit={submit}>
        <div>
          <InputLabel htmlFor="name" value="Name" />

          <TextInput
            id="name"
            name="name"
            value={data.name}
            className="mt-1 block w-full"
            autoComplete="name"
            isFocused={true}
            onChange={(e) => setData('name', e.target.value)}
            required
          />

          <InputError message={errors.name} className="mt-2" />
        </div>

        <div className="mt-4">
          <InputLabel htmlFor="email" value="Email" />

          <TextInput
            id="email"
            type="email"
            name="email"
            value={data.email}
            className="mt-1 block w-full"
            autoComplete="username"
            onChange={(e) => setData('email', e.target.value)}
            required
          />

          <InputError message={errors.email} className="mt-2" />
        </div>

        <div className="mt-4">
          <InputLabel htmlFor="password" value="Password" />

          <TextInput
            id="password"
            type="password"
            name="password"
            value={data.password}
            className="mt-1 block w-full"
            autoComplete="new-password"
            onChange={(e) => setData('password', e.target.value)}
            required
          />

          <InputError message={errors.password} className="mt-2" />
        </div>

        <div className="mt-4">
          <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

          <TextInput
            id="password_confirmation"
            type="password"
            name="password_confirmation"
            value={data.password_confirmation}
            className="mt-1 block w-full"
            autoComplete="new-password"
            onChange={(e) => setData('password_confirmation', e.target.value)}
            required
          />

          <InputError message={errors.password_confirmation} className="mt-2" />
        </div>

        {roles && (
          <div className="mt-4">
            <InputLabel htmlFor="role" value="Select Role" />
            <SelectInput
              id="role"
              type="select"
              name="role"
              value={data.role}
              className="mt-1 block w-full"
              autoComplete="role"
              onChange={(e) => setData('role', e.target.value)}
              required
            >
              {roles && roles.map((item, index) => (
                <option key={"option-"+index} value={item.name}>{item.name}</option>
              ))}
            </SelectInput>
            <InputError message={errors.password_confirmation} className="mt-2" />
          </div>
        )}

        <div className="flex items-center justify-end mt-4">
          <Transition
              show={recentlySuccessful}
              enter="transition ease-in-out"
              enterFrom="opacity-0"
              leave="transition ease-in-out"
              leaveTo="opacity-0"
            >
              <p className="text-sm text-gray-600">Saved.</p>
          </Transition>
          <PrimaryButton disabled={processing}>Delete</PrimaryButton>
        </div>
      </form>
    </section>
  )
}

export default CreateUserForm