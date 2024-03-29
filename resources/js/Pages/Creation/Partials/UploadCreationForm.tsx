import Checkbox from '@/Components/Checkbox';
import ConditionalRender from '@/Components/ConditionalRender';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import SelectInput from '@/Components/SelectInput';
import TextInput from '@/Components/TextInput';
import { Category, Creation, PageProps, Roles, Slider } from '@/types';
import { Link, useForm, usePage } from '@inertiajs/react';
import { FormEventHandler, useEffect, useState } from 'react';


type CreationInsert = {
  title: string,
  upload_location: string,
  upload_status: string
}

function UploadCreationForm({ onComplete, className, item, mode = 'create' }: { onComplete?: () => void, className?: string, item?: Creation, mode?: 'create' | 'update' }) {

  const { data, setData, patch, processing, errors, wasSuccessful } = useForm<CreationInsert>({
    title: item?.title as string || 'Karya 1',
    upload_location: item?.upload_location as string || '',
    upload_status: item?.upload_status as string || '0'
  });

  console.log(data)

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    if (mode == 'update' && item != undefined) {
      patch(route('creation.update', { creation: item?.id }));
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
      <form onSubmit={submit} className="flex flex-col gap-4">
        <div className="mt-4">
          <p className='text-3xl font-semibold  text-gray-700'>{data.title}</p>

          <ConditionalRender condition={data.upload_status != '1'}>
            <InputLabel className="text-2xl font-semibold" htmlFor="title" >
              Tautan Unggah Video: <br />
              <a href={item?.upload_location} className="text-blue-400">{item?.upload_location}</a>
            </InputLabel>
          </ConditionalRender>
        </div>

        <ConditionalRender condition={data.upload_status != '1'}>
          <div>
            <InputLabel htmlFor="upload_status">
              <Checkbox className="mr-2"
                id="upload_status"
                value="1"
                name='upload_status'
                required
                checked={data.upload_status == '1'}
                onChange={(e) => {
                  setData('upload_status', e.target.value)
                  console.log(e.target.value)
                }} />
              Saya sudah mengunggah video pada tautan google drive yang disediakan panitia
            </InputLabel>

            <InputError message={errors.upload_status} className="mt-2" />
          </div>


          <div className="flex items-center justify-start mt-4">
            <PrimaryButton className="" disabled={processing}>
              Daftarkan Karya
            </PrimaryButton>
          </div>
        </ConditionalRender>

        <ConditionalRender condition={data.upload_status == '1'}>
          <InputLabel className="w-1/2 text-xl font-semibold text-center mx-auto" htmlFor="title" >
            Terima Kasih sudah melakukan konfirmasi bahwa anda sudah mengunggah video pada tempat yang kami sediakan.
          </InputLabel>
        </ConditionalRender>

      </form>
    </section>
  )
}

export default UploadCreationForm