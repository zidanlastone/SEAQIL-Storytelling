import ComboBoxInput, { ComboBoxData } from '@/Components/ComboBoxInput';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import SelectInput from '@/Components/SelectInput';
import TextInput from '@/Components/TextInput';
import { Category, ExternalServiceConfig, Language, PageProps, PageSection, QuestionAndAnswer, Roles } from '@/types';
import { Link, useForm, usePage } from '@inertiajs/react';
import { FormEventHandler, useEffect, useMemo, useState } from 'react';

type PageSectionInsert = Omit<PageSection, 'id'>

type PageSectionProps = {
  onComplete?: () => void,
  className?: string,
  item?: PageSection,
  mode?: 'create' | 'update',
  languages: Language[]
}

function CategoryForm({ onComplete, className, item, mode = 'create', languages = [] }: PageSectionProps) {

  const { data, setData, post, patch, processing, errors, wasSuccessful } = useForm<PageSectionInsert>({
    language_id: item?.language_id || 0,
    section: item?.section || '',
    content: item?.content || '',
  });

  const submit: FormEventHandler = (e) => {

    console.log(data)
    e.preventDefault();
    if (mode == 'create') {
      post(route('admin.page_section.store'), { forceFormData: false });
    } else if (mode == 'update' && item != undefined) {
      patch(route('admin.page_section.update', { page_section: item?.id, }), { forceFormData: false });
    }
  };

  useEffect(() => {
    if (wasSuccessful) {
      if (typeof onComplete == 'function') {
        onComplete();
      }
    }
  }, [wasSuccessful])

  const combo_languages: ComboBoxData[] = useMemo(() => {
    if (typeof languages != undefined) {
      return languages!.map(item => ({ id: item.id, value: item.name }))
    }
    return [];
  }, [languages])

  const [selectedLanguage, setSelectedLanguage] = useState<ComboBoxData | null>(combo_languages.find(x => x.id == item?.language_id) || null);

  return (
    <section className={className}>
      <header>
        <h2 className="text-lg font-medium text-gray-900">Tambah Data Section</h2>
      </header>
      <form onSubmit={submit} className="flex flex-col gap-4">

        <div>
          <InputLabel htmlFor="language_id" value="Pilih Bahasa" />
          <ComboBoxInput
            data={combo_languages}
            id="language_id"
            onChange={(value) => {
              setSelectedLanguage(value)
              setData('language_id', value.id)
            }}
            value={selectedLanguage} />
          <InputError message={errors.language_id} className="mt-2" />
        </div>

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

        <div className="my-2">
          <InputLabel htmlFor="content" value="Conent" />
          <textarea
            className="w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "
            name="description" id="description" rows={3}
            defaultValue={data.content}
            onChange={(e) => setData('content', e.target.value)} />
          <InputError className="mt-2" message={errors.content} />
        </div>


        <div className="flex items-center justify-end mt-4">
          <PrimaryButton className="ms-4" disabled={processing}>
            {mode == 'create' ? 'Tambah Data' : 'Ubah Data'}
          </PrimaryButton>
        </div>
      </form>
    </section>
  )
}

export default CategoryForm