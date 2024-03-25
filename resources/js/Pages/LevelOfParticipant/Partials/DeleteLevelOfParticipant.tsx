import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { LevelOfParticipant } from '@/types';
import { Transition } from '@headlessui/react';
import { useForm } from '@inertiajs/react';
import { FormEventHandler, useEffect } from 'react'

import { InsertLevelOfParticipant } from './LevelOfParticipantForm';


function DeleteLevelOfParticipant({ className, item, onComplete }: { className?: string, item?: LevelOfParticipant, onComplete: () => void }) {

  const { data, delete: destroy, reset, processing, setData, errors, recentlySuccessful, wasSuccessful } = useForm<InsertLevelOfParticipant>({
    level_name: item?.level_name || '',
    description: item?.description || ''
  });

  const deleteUser: FormEventHandler = (e) => {
    e.preventDefault();

    if (item != undefined) {
      destroy(route('level-of-participant.destroy', { level_of_participant: item.id }), {
        preserveScroll: true,
        onSuccess: () => reset(),
        onError: (errors) => {
          console.log(errors)
        },
      });
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
        <h2 className="text-lg font-medium text-gray-900">Tingkatan Partisipan</h2>
        <p className="mt-1 text-sm text-gray-600">
          Apakah Anda yakin ingin tingkatan partisipan ini?
        </p>
      </header>
      <form onSubmit={deleteUser} className="mt-6 space-y-6">

        <div>
          <InputLabel htmlFor="image" value="Tingkatan Partisipan" />
          <TextInput
            id="image"
            type="text"
            name="level_name"
            value={data.level_name}
            className="my-2 block w-full"
            autoComplete="category_name"
            isFocused={true}
            onChange={(e) => setData('level_name', e.target.value)}
            required
          />

          <InputError message={errors.level_name} className="mt-2" />
        </div>

        <div className="flex items-center gap-4">
          <PrimaryButton disabled={processing}>Delete</PrimaryButton>
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
    </section>
  )
}

export default DeleteLevelOfParticipant