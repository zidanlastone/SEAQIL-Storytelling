import Checkbox from '@/Components/Checkbox';
import ConditionalRender from '@/Components/ConditionalRender';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import { Category, Creation, PageProps, Roles, Slider } from '@/types';
import { useForm } from '@inertiajs/react';
import React, { FormEventHandler, useEffect, useState } from 'react';
import UpdateCreationTitle from './UpdateCreationTitle';

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

  const [updateMode, setUpdateMode] = useState<boolean>(false);

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    if (mode == 'update' && item != undefined) {
      patch(route('creation.update', { creation: item?.id }));
    }
  };

  useEffect(() => {
    if (wasSuccessful) {
      if (typeof onComplete == 'function') {
        setTimeout(onComplete, 1000);
      }
    }
  }, [wasSuccessful])

  return (
    <section className={className}>

      <div className="flex flex-col">

        <div className="mt-4">
          <UpdateCreationTitle item={item} updateMode={updateMode} setUpdateMode={setUpdateMode} />
        </div>

        <ConditionalRender condition={!updateMode}>
          <form onSubmit={submit} className="flex flex-col gap-4">
            <ConditionalRender condition={item?.upload_status != '1'}>
              <div className="mt-4">
                <InputLabel className="text-2xl font-semibold" htmlFor="title" >
                  Tautan Unggah Video: <br />
                  <a href={item?.upload_location} target="_blank" className="text-blue-400">{item?.upload_location}</a>
                </InputLabel>
              </div>
            </ConditionalRender>

            <ConditionalRender condition={item?.upload_status != '1'}>
              <div>
                <InputLabel htmlFor="upload_status">
                  <Checkbox className="mr-2"
                    id="upload_status"
                    name='upload_status'
                    required
                    checked={data.upload_status == '1'}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setData('upload_status', "1")
                      } else {
                        setData('upload_status', "0")
                      }
                    }} />
                  Saya sudah mengunggah video pada tautan google drive yang disediakan panitia
                </InputLabel>

                <InputError message={errors.upload_status} className="mt-2" />
              </div>


              <div className="flex items-center justify-start mt-4">
                <PrimaryButton disabled={processing}>
                  Daftarkan Karya
                </PrimaryButton>
              </div>
            </ConditionalRender>

            <ConditionalRender condition={item?.upload_status == '1'}>
              <InputLabel className="w-1/2 text-xl font-semibold text-center mx-auto" htmlFor="title" >
                Terima kasih sudah melakukan konfirmasi bahwa anda sudah mengunggah video pada tempat yang kami sediakan.
              </InputLabel>
            </ConditionalRender>

          </form>
        </ConditionalRender>
      </div>
    </section>
  )
}

export default UploadCreationForm