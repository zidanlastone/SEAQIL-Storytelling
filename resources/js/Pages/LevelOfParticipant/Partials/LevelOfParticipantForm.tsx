import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import SelectInput from '@/Components/SelectInput';
import TextInput from '@/Components/TextInput';
import { Category, LevelOfParticipant, PageProps, Roles } from '@/types';
import { Link, useForm, usePage } from '@inertiajs/react';
import { FormEventHandler, useEffect, useState } from 'react';



function LevelOfParticipantForm({ onComplete, className, item, mode = 'create' }: { onComplete?: () => void, className?: string, item?: LevelOfParticipant, mode?: 'create' | 'update' }) {

  const { data, setData, post, patch, processing, errors, wasSuccessful } = useForm<LevelOfParticipant>({
    level_name: item?.level_name || '',
    description: item?.description || ''
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    if (mode == 'create') {
      post(route('level-of-participant.store'), { forceFormData: true });
    } else if (mode == 'update' && item != undefined) {
      patch(route('level-of-participant.update', { level_of_participant: item?.id }), { forceFormData: true });
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
        <h2 className="text-lg font-medium text-gray-900">Tambah Data Tingkatan Partisipan</h2>
      </header>
      <form onSubmit={submit} className="flex flex-col gap-4">
        <div>
          <InputLabel htmlFor="category_name" value="Nama Tingkatan Partisipan" />
          <TextInput
            id="name"
            name="name"
            value={data.level_name}
            className="my-2 block w-full"
            autoComplete="name"
            isFocused={true}
            onChange={(e) => setData('level_name', e.target.value)}
            required
          />
          <InputError message={errors.level_name} className="mt-2" />
        </div>

        <div>
          <InputLabel htmlFor="address" value="Deskripsi" />

          <textarea
            className="w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "
            name="description" id="description" rows={3}
            defaultValue={data.description}
            onChange={(e) => setData('description', e.target.value)} />

          <InputError className="mt-2" message={errors.description} />
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

export default LevelOfParticipantForm