import Checkbox from '@/Components/Checkbox';
import ConditionalRender from '@/Components/ConditionalRender';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import SelectInput from '@/Components/SelectInput';
import TextInput from '@/Components/TextInput';
import { Category, Creation, PageProps, Roles, Slider } from '@/types';
import { Transition } from '@headlessui/react';
import { Link, useForm, usePage } from '@inertiajs/react';
import React, { Dispatch, FormEventHandler, SetStateAction, useEffect, useState } from 'react';

type CreationInsert = {
  title: string,
  upload_location: string,
  upload_status: string
}

type UpdateCreationTitle = {
  title: string,
  upload_status: string
}

type UpdateCreationTitleProps = {
  item?: Creation, 
  updateMode: boolean, 
  setUpdateMode: Dispatch<SetStateAction<boolean>>
}

function UpdateCreationTitle({item, updateMode, setUpdateMode}: UpdateCreationTitleProps){

  const { data, setData, patch, processing, errors, wasSuccessful, recentlySuccessful } = useForm<UpdateCreationTitle>({
    title: item?.title as string || '',
    upload_status: item?.upload_status || "0",
  });

  const onSubmit: FormEventHandler = (e) => {

    e.preventDefault();
    if (item != undefined) {
      patch(route('creation.update', { creation: item?.id }));
    }
  }

  useEffect(() => {
    if (wasSuccessful) {
      if (typeof setUpdateMode == 'function') {
        setTimeout(() => setUpdateMode(false), 1000);
      }
    }
  }, [wasSuccessful])


  if(!updateMode){
    return (
      <div className="flex flex-row">
        <h2 className='text-xl font-semibold  text-gray-700'>
          {data.title}
        </h2>

        <ConditionalRender condition={item?.upload_status == "0"}>
        <button type="button" className="ml-2" onClick={() => setUpdateMode(!updateMode)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
          </svg>
        </button>
        </ConditionalRender>
      </div>
    )
  }
  
  return (
    <form onSubmit={onSubmit} className='flex flex-row'>
      <div>
        <InputLabel>Judul Karya</InputLabel>
        <TextInput 
          id="title"
          name="title"
          value={data.title}
          className="my-2 block w-full"
          autoComplete="title"
          isFocused={true}
          onChange={(e) => setData('title', e.target.value)}/>
        <InputError className="mt-2" message={errors.title} />
      </div>
      <div className="flex items-center justify-end mt-4">
          <PrimaryButton className="ms-4" disabled={processing}>
             Ubah Data
          </PrimaryButton>
          <Transition
              show={recentlySuccessful}
              enter="transition ease-in-out"
              enterFrom="opacity-0"
              leave="transition ease-in-out"
              leaveTo="opacity-0"
            >
              <p className="text-sm text-gray-600 ml-2">Saved.</p>
            </Transition>
        </div>
    </form>
  );
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