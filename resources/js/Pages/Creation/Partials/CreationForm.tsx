import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Creation, User } from '@/types';
import { Transition } from '@headlessui/react';
import { useForm } from '@inertiajs/react';
import React, { FormEventHandler, useEffect } from 'react'

type CreationInsert = {
  title: string,
  upload_location: string,
  upload_status: string
}

function CreationForm({ onComplete, className, item, mode = 'create', participants = [] }: { onComplete?: () => void, className?: string, item?: Creation, mode?: 'create' | 'update', participants?: User[] }) {

  const { data, setData, post, patch, processing, errors, wasSuccessful, recentlySuccessful } = useForm<CreationInsert>({
    title: item?.title as string || 'Karya 1',
    upload_location: item?.upload_location as string || '',
    upload_status: item?.upload_status as string || '0'
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    if (mode == 'create') {
      post(route('creation.store'));
    } else if (mode == 'update' && item != undefined) {
      patch(route('creation.update', { creation: item?.id }));
    }
  };


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
        <h2 className="text-lg font-medium text-gray-900"> {mode == "create" ? 'Tambah' : 'Ubah'} Data Karya Peserta</h2>
      </header>
      <form onSubmit={submit} className="flex flex-col gap-4">

        <div>
          <InputLabel htmlFor="participant_name" value="Nama Peserta" />
          <TextInput
            id="participant_name"
            name="participant_name"
            value={item?.participant?.user.name}
            className="my-2 block w-full"
            autoComplete="participant_name"
            isFocused={true}
            disabled
            readOnly
          />
        </div>

        <div>
          <InputLabel htmlFor="title" value="Judul Karya" />
          <TextInput
            id="title"
            name="title"
            value={data.title}
            className="my-2 block w-full"
            autoComplete="title"
            isFocused={true}
            onChange={(e) => setData('title', e.target.value)}
            required
          />
          <InputError message={errors.title} className="mt-2" />
        </div>

        <div>
          <InputLabel htmlFor="upload_location" value="Lokasi Upload" />
          <TextInput
            id="title"
            name="upload_location"
            value={data.upload_location}
            className="my-2 block w-full"
            autoComplete="upload_location"
            isFocused={true}
            onChange={(e) => setData('upload_location', e.target.value)}
            required
          />
          <InputError message={errors.upload_location} className="mt-2" />
        </div>

        <div>
          <InputLabel htmlFor="upload_status" value="Status Unggah" />
          <div className="flex flex-row gap-4">
            <label htmlFor="upload_status-l">
              <input type="radio" id="upload_status-l" name="upload_status" value={"0"} checked={data.upload_status == '0'} onChange={(e) => setData('upload_status', '0')} /> Belum Upload
            </label>
            <label htmlFor="upload_status-p">
              <input type="radio" id="upload_status-p" name="upload_status" value={"1"} checked={data.upload_status == '1'} onChange={(e) => setData('upload_status', '1')} /> Sudah Upload / Proses Seleksi
            </label>
            <label htmlFor="upload_status-q">
              <input type="radio" id="upload_status-q" name="upload_status" value={"2"} checked={data.upload_status == '2'} onChange={(e) => setData('upload_status', '2')} /> Lolos Seleksi
            </label>
          </div>
          <InputError className="mt-2" message={errors.upload_status} />
        </div>

        <div className="flex items-center justify-end mt-4">
          <Transition
              show={recentlySuccessful}
              enter="transition ease-in-out"
              enterFrom="opacity-0"
              leave="transition ease-in-out"
              leaveTo="opacity-0"
            >
              <p className="text-sm text-gray-600 mr-2">Saved.</p>
            </Transition>
          
          <PrimaryButton className="ms-4" disabled={processing}>
            {mode == 'create' ? 'Tambah Data' : 'Ubah Data'}
          </PrimaryButton>
        </div>
      </form>
    </section>
  )
}

export default CreationForm