import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { PageSection } from '@/types';
import { Transition } from '@headlessui/react';
import { useForm } from '@inertiajs/react';
import { FormEventHandler, useEffect, } from 'react'

function DeleteCategory({ className, item, onComplete }: { className?: string, item?: PageSection, onComplete: () => void }) {

  const { data, delete: destroy, reset, processing, setData, errors, recentlySuccessful, wasSuccessful } = useForm<{ section: string }>({
    section: item?.section || ''
  });

  const deleteUser: FormEventHandler = (e) => {
    e.preventDefault();

    if (item != undefined) {
      destroy(route('admin.page_section.destroy', { page_section: item.id }), {
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
        <h2 className="text-lg font-medium text-gray-900">Kategori</h2>
        <p className="mt-1 text-sm text-gray-600">
          Apakah Anda yakin ingin menghapus kategori ini?
        </p>
      </header>
      <form onSubmit={deleteUser} className="mt-6 space-y-6">

        <div>
          <InputLabel htmlFor="section" value="Section" />
          <TextInput
            id="section"
            name="section"
            value={data.section}
            className="my-2 block w-full"
            autoComplete="section"
            isFocused={true}
            onChange={(e) => setData('section', e.target.value)}
            required
          />
          <InputError message={errors.section} className="mt-2" />
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

export default DeleteCategory