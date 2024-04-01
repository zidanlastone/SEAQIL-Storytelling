import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Language } from '@/types';
import { Transition } from '@headlessui/react';
import { useForm } from '@inertiajs/react';
import { FormEventHandler, useEffect } from 'react';


type LanguageInsert = Omit<Language, 'id'>

function CategoryForm({ onComplete, className, item, mode = 'create' }: { onComplete?: () => void, className?: string, item?: Language, mode?: 'create' | 'update' }) {

  const { data, setData, post, patch, processing, errors, wasSuccessful, recentlySuccessful } = useForm<LanguageInsert>({
    name: item?.name || '',
    code: item?.code || '',
  });

  const submit: FormEventHandler = (e) => {

    console.log(data)
    e.preventDefault();
    if (mode == 'create') {
      post(route('language.store'), { forceFormData: false });
    } else if (mode == 'update' && item != undefined) {
      patch(route('language.update', { language: item?.id, }), { forceFormData: false });
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
        <h2 className="text-lg font-medium text-gray-900">Tambah Data Bahasa</h2>
      </header>
      <form onSubmit={submit} className="flex flex-col gap-4">
        <div>
          <InputLabel htmlFor="name" value="Nama Bahasa" />
          <TextInput
            id="name"
            name="name"
            value={data.name}
            className="my-2 block w-full"
            autoComplete="name"
            isFocused={true}
            onChange={(e) => setData('name', e.target.value)}
            required
          />
          <InputError message={errors.name} className="mt-2" />
        </div>
        <div>
          <InputLabel htmlFor="code" value="Kode Bahasa" />
          <TextInput
            id="code"
            name="code"
            value={data.code}
            className="my-2 block w-full"
            autoComplete="code"
            isFocused={true}
            onChange={(e) => setData('code', e.target.value)}
            required
          />
          <InputError message={errors.code} className="mt-2" />
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

export default CategoryForm