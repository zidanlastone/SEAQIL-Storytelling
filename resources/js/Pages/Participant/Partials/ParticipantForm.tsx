import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import SelectInput from '@/Components/SelectInput';
import TextInput from '@/Components/TextInput';
import { Category, LevelOfParticipant, PageProps, Participant, Roles } from '@/types';
import { Link, useForm, usePage } from '@inertiajs/react';
import { FormEventHandler, useEffect, useState } from 'react';

type ParticipantInsert = {
  user_id?: number,
  payment_receipt?: File,
  status_verifikasi?: number,
  category_id?: number,
  language_id?: number,
  level_of_participant_id?: number,
}
function ParticipantForm({ onComplete, className, item, mode = 'create' }: { onComplete?: () => void, className?: string, item?: Participant, mode?: 'create' | 'update' }) {

  const { data, setData, post, patch, processing, errors, wasSuccessful } = useForm<ParticipantInsert>({
    user_id: item?.user_id,
    payment_receipt: undefined,
    status_verifikasi: item?.status_verifikasi,
    category_id: item?.category_id,
    language_id: item?.language_id,
    level_of_participant_id: item?.level_of_participant_id,
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
          {/* <TextInput
            id="name"
            name="name"
            value={data.payment_receipt}
            className="my-2 block w-full"
            autoComplete="name"
            isFocused={true}
            onChange={(e) => {

              if (e.target.files) {
                setData('payment_receipt', e.target.files[0])
              }
            }}
            required
          /> */}
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