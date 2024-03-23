import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import SelectInput from '@/Components/SelectInput';
import TextInput from '@/Components/TextInput';
import { Category, PageProps, Roles } from '@/types';
import { Link, useForm, usePage } from '@inertiajs/react';
import { FormEventHandler, useEffect, useState } from 'react';


type CategoryInsert = {
  category_name: string,
  image?: File
}

function CategoryForm({ onComplete, className, item, mode = 'create' }: { onComplete?: () => void, className?: string, item?: Category, mode?: 'create' | 'update' }) {

  const { data, setData, post, patch, processing, errors, wasSuccessful } = useForm<CategoryInsert>({
    category_name: item?.category_name || '',
    image: undefined
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    if (mode == 'create') {
      post(route('category.store'), { forceFormData: true });
    } else if (mode == 'update' && item != undefined) {
      patch(route('category.update', { category: item?.id }), { forceFormData: true });
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
          <InputLabel htmlFor="category_name" value="Nama Kategori" />
          <TextInput
            id="name"
            name="name"
            value={data.category_name}
            className="my-2 block w-full"
            autoComplete="name"
            isFocused={true}
            onChange={(e) => setData('category_name', e.target.value)}
            required
          />
          <InputError message={errors.category_name} className="mt-2" />
        </div>

        <div>
          <InputLabel htmlFor="image" value="Gambar Kategori" />
          <TextInput
            id="image"
            type="file"
            name="image"
            className="my-2 block w-full"
            autoComplete="image"
            isFocused={true}
            onChange={(e) => {
              if (e.target.files) {
                setData('image', e.target.files[0])
              }
            }}
            required
          />

          <InputError message={errors.image} className="mt-2" />

          {item?.image && (
            <p>File Sebelumnya: {item?.image}</p>
          )}
        </div>

        <div className="flex items-center justify-end mt-4">
          <PrimaryButton className="ms-4" disabled={processing}>
            Tambah Data
          </PrimaryButton>
        </div>
      </form>
    </section>
  )
}

export default CategoryForm