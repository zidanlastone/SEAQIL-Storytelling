import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import SelectInput from '@/Components/SelectInput';
import TextInput from '@/Components/TextInput';
import { Category, PageProps, Roles, Slider } from '@/types';
import { Link, useForm, usePage } from '@inertiajs/react';
import { FormEventHandler, useEffect, useState } from 'react';


type SliderInsert = {
  title: string,
  source?: File,
  description: string,
  type: string
}

function SliderForm({ onComplete, className, item, mode = 'create' }: { onComplete?: () => void, className?: string, item?: Slider, mode?: 'create' | 'update' }) {

  const { data, setData, post, patch, processing, errors, wasSuccessful } = useForm<SliderInsert>({
    title: item?.title || '',
    source: undefined,
    description: item?.description || '',
    type: item?.type || ''
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    if (mode == 'create') {
      post(route('slider.store'), { forceFormData: true });
    } else if (mode == 'update' && item != undefined) {
      patch(route('slider.update', { slider: item?.id }), { forceFormData: true });
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
          <InputLabel htmlFor="category_name" value="Nama Slider" />
          <TextInput
            id="name"
            name="name"
            value={data.title}
            className="my-2 block w-full"
            autoComplete="name"
            isFocused={true}
            onChange={(e) => setData('title', e.target.value)}
            required
          />
          <InputError message={errors.title} className="mt-2" />
        </div>

        <div>
          <InputLabel htmlFor="type" value="Tipe Slider" />
          <div className="flex flex-row gap-4">
            <label htmlFor="type-l">
              <input type="radio" id="type-l" name="type" value="image" checked={data.type == "image"} onChange={(e) => setData('type', "image")} /> Image
            </label>
            <label htmlFor="type-p">
              <input type="radio" id="type-p" name="type" value="video" checked={data.type == "video"} onChange={(e) => setData('type', "video")} /> Video
            </label>
          </div>
          <InputError className="mt-2" message={errors.type} />
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
                setData('source', e.target.files[0])
              }
            }}
            required
          />

          <InputError message={errors.source} className="mt-2" />

          {item?.source && (
            <p>File Sebelumnya: {item?.source}</p>
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

export default SliderForm