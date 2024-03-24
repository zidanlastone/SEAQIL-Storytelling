import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import SelectInput from '@/Components/SelectInput';
import TextInput from '@/Components/TextInput';
import { Category, LevelOfParticipant, PageProps, Participant, Roles } from '@/types';
import { Link, useForm, usePage } from '@inertiajs/react';
import { FormEventHandler, useEffect, useState } from 'react';



function ParticipantForm({ onComplete, className, item, mode = 'create' }: { onComplete?: () => void, className?: string, item?: Participant, mode?: 'create' | 'update' }) {

  const { data, setData, post, patch, processing, errors, wasSuccessful } = useForm<Participant>({
    status_verifikasi: item?.status_verifikasi || 0,
    category_id: item?.category_id || 1,
    language_id: item?.language_id || 1,
    level_of_participant_id: item?.level_of_participant_id || 1,
    payment_receipt: ''
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    if (mode == 'create') {
      post(route('participant.store'), { forceFormData: true });
    } else if (mode == 'update' && item != undefined) {
      patch(route('participant.update', { participant: item?.id }), { forceFormData: true });
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
            value={data.payment_receipt}
            className="my-2 block w-full"
            autoComplete="name"
            isFocused={true}
            onChange={(e) => setData('payment_receipt', e.target.value)}
            required
          />
          <InputError message={errors.payment_receipt} className="mt-2" />
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

export default ParticipantForm