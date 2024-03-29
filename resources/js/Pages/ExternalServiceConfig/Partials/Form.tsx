import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import SelectInput from '@/Components/SelectInput';
import TextInput from '@/Components/TextInput';
import { Category, ExternalServiceConfig, PageProps, Roles } from '@/types';
import { Link, useForm, usePage } from '@inertiajs/react';
import { FormEventHandler, useEffect, useState } from 'react';


type ExternalServiceConfigInsert = Omit<ExternalServiceConfig, 'id'>

function CategoryForm({ onComplete, className, item, mode = 'create' }: { onComplete?: () => void, className?: string, item?: ExternalServiceConfig, mode?: 'create' | 'update' }) {

  const { data, setData, post, patch, processing, errors, wasSuccessful } = useForm<ExternalServiceConfigInsert>({
    service_name: item?.service_name || '',
    protocol: item?.protocol || '',
    host: item?.host || '',
    port: item?.port || 0,
    timeout: item?.timeout || 0,
    username: item?.username || '',
    password: item?.password || ''
  });

  const submit: FormEventHandler = (e) => {

    console.log(data)
    e.preventDefault();
    if (mode == 'create') {
      post(route('admin.external-service-config.store'), { forceFormData: false });
    } else if (mode == 'update' && item != undefined) {
      patch(route('admin.external-service-config.update', { external_service_config: item?.id, }), { forceFormData: false });
    }
  };

  useEffect(() => {
    if (wasSuccessful) {
      if (typeof onComplete == 'function') {
        onComplete();
      }
    }
  }, [wasSuccessful])

  return (
    <section className={className}>
      <header>
        <h2 className="text-lg font-medium text-gray-900">Tambah Data Kategori</h2>
      </header>
      <form onSubmit={submit} className="flex flex-col gap-4">
        <div>
          <InputLabel htmlFor="service_name" value="Nama Service" />
          <TextInput
            id="service_name"
            name="service_name"
            value={data.service_name}
            className="my-2 block w-full"
            autoComplete="service_name"
            isFocused={true}
            onChange={(e) => setData('service_name', e.target.value)}
            required
          />
          <InputError message={errors.service_name} className="mt-2" />
        </div>

        <div>
          <InputLabel htmlFor="protocol" value="Protokol" />
          <TextInput
            id="protocol"
            name="protocol"
            value={data.protocol}
            className="my-2 block w-full"
            autoComplete="protocol"
            isFocused={true}
            onChange={(e) => setData('protocol', e.target.value)}
            required
          />
          <InputError message={errors.protocol} className="mt-2" />
        </div>
        <div>
          <InputLabel htmlFor="host" value="Host" />
          <TextInput
            id="host"
            name="host"
            value={data.host}
            className="my-2 block w-full"
            autoComplete="host"
            isFocused={true}
            onChange={(e) => setData('host', e.target.value)}
            required
          />
          <InputError message={errors.host} className="mt-2" />
        </div>
        <div>
          <InputLabel htmlFor="port" value="port" />
          <TextInput
            type='number'
            id="port"
            name="port"
            value={data.port}
            className="my-2 block w-full"
            autoComplete="port"
            isFocused={true}
            onChange={(e) => setData('port', parseInt(e.target.value))}
            required
          />
          <InputError message={errors.port} className="mt-2" />
        </div>
        <div>
          <InputLabel htmlFor="timeout" value="timeout" />
          <TextInput
            type='number'
            id="timeout"
            name="timeout"
            value={data.timeout}
            className="my-2 block w-full"
            autoComplete="timeout"
            isFocused={true}
            onChange={(e) => setData('timeout', parseInt(e.target.value))}
            required
          />
          <InputError message={errors.timeout} className="mt-2" />
        </div>
        <div>
          <InputLabel htmlFor="username" value="username" />
          <TextInput
            id="username"
            name="username"
            value={data.username}
            className="my-2 block w-full"
            autoComplete="username"
            isFocused={true}
            onChange={(e) => setData('username', e.target.value)}
          />
          <InputError message={errors.username} className="mt-2" />
        </div>
        <div>
          <InputLabel htmlFor="password" value="password" />
          <TextInput
            id="password"
            name="password"
            value={data.password}
            className="my-2 block w-full"
            autoComplete="password"
            isFocused={true}
            onChange={(e) => setData('password', e.target.value)}
          />
          <InputError message={errors.password} className="mt-2" />
        </div>

        <div className="flex items-center justify-end mt-4">
          <PrimaryButton className="ms-4" disabled={processing}>
            {mode == 'create' ? 'Tambah Data' : 'Ubah Data'}
          </PrimaryButton>
        </div>
      </form>
    </section>
  )
}

export default CategoryForm