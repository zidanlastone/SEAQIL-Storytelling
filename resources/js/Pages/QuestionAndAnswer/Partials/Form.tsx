import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import SelectInput from '@/Components/SelectInput';
import TextInput from '@/Components/TextInput';
import { Category, ExternalServiceConfig, PageProps, QuestionAndAnswer, Roles } from '@/types';
import { Transition } from '@headlessui/react';
import { Link, useForm, usePage } from '@inertiajs/react';
import { FormEventHandler, useEffect, useState } from 'react';


type QuestionAndAnswerInsert = Omit<QuestionAndAnswer, 'id'>

function CategoryForm({ onComplete, className, item, mode = 'create' }: { onComplete?: () => void, className?: string, item?: QuestionAndAnswer, mode?: 'create' | 'update' }) {

  const { data, setData, post, patch, processing, errors, wasSuccessful, recentlySuccessful } = useForm<QuestionAndAnswerInsert>({
    question: item?.question || '',
    answer: item?.answer || '',
  });

  const submit: FormEventHandler = (e) => {

    console.log(data)
    e.preventDefault();
    if (mode == 'create') {
      post(route('admin.question-and-answer.store'), { forceFormData: false });
    } else if (mode == 'update' && item != undefined) {
      patch(route('admin.question-and-answer.update', { question_and_answer: item?.id, }), { forceFormData: false });
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
        <h2 className="text-lg font-medium text-gray-900">Tambah Data Kategori</h2>
      </header>
      <form onSubmit={submit} className="flex flex-col gap-4">

        <div className="my-2">
          <InputLabel htmlFor="question" value="Pertannyaan" />

          <textarea
            className="w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "
            name="description" id="description" rows={3}
            defaultValue={data.question}
            onChange={(e) => setData('question', e.target.value)} />

          <InputError className="mt-2" message={errors.question} />
        </div>

        <div className="my-2">
          <InputLabel htmlFor="answer" value="Jawaban" />
          <textarea
            className="w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "
            name="description" id="description" rows={3}
            defaultValue={data.answer}
            onChange={(e) => setData('answer', e.target.value)} />
          <InputError className="mt-2" message={errors.answer} />
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