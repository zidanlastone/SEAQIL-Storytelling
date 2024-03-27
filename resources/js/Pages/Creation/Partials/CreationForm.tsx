import Checkbox from '@/Components/Checkbox';
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

function SliderForm({ onComplete, className, item, mode = 'create' }: { onComplete?: () => void, className?: string, item?: Creation, mode?: 'create' | 'update' }) {

  const { data, setData, post, patch, processing, errors, wasSuccessful } = useForm<CreationInsert>({
    title: item?.title as string || 'Karya 1',
    upload_location: item?.upload_location as string || '',
    upload_status: item?.upload_status as string || '0'
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
      <form onSubmit={submit} className="flex flex-col gap-4">
        <div className="mt-4">
          <InputLabel className="text-2xl font-semibold" htmlFor="title" >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, eius.
          </InputLabel>
        <InputLabel className="text-xl font-semibold" htmlFor="title" >
            Tautan Unggah Video: <br />
            <a href="" className="text-blue-400">https://docs.google.com/spreadsheets/d/1TBLdFubH7Fmp6W4UBDd2ZEY1H-yIxp5z4-V3DplY220/edit#gid=1280851324</a>
        </InputLabel>
        </div>

        

        {/* <div>
          <InputLabel htmlFor="title" value="Link Upload Karya" />
          <TextInput
            id="title"
            name="upload_location"
            value={data.upload_location}
            className="my-2 block w-full"
            autoComplete="title"
            isFocused={true}
            onChange={(e) => setData('upload_location', e.target.value)}
            required
          />
          <InputError message={errors.upload_location} className="mt-2" />
        </div> */}


        <div>
          <InputLabel htmlFor="upload_status">
            <Checkbox className="mr-2" id="upload_status" name='upload_status' onChange={(e) => setData('upload_status', e.target.value)} />
            Saya sudah mengunggah video pada tautan google drive yang disediakan panitia
          </InputLabel>

          <InputError message={errors.upload_status} className="mt-2" />
        </div>

        <div className="flex items-center justify-start mt-4">
          <PrimaryButton className="" disabled={processing}>
            Daftarkan Karya
          </PrimaryButton>
        </div>
      </form>
    </section>
  )
}

export default SliderForm