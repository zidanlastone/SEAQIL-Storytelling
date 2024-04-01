import ComboBoxInput, { ComboBoxData } from '@/Components/ComboBoxInput';
import ConditionalRender from '@/Components/ConditionalRender';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import SelectInput from '@/Components/SelectInput';
import TextInput from '@/Components/TextInput';
import { Category, Language, LevelOfParticipant, PageProps, Participant, Roles, User } from '@/types';
import { Transition } from '@headlessui/react';
import { Link, useForm, usePage } from '@inertiajs/react';
import { FormEventHandler, useEffect, useMemo, useState } from 'react';

type ParticipantInsert = {
  user_id?: number | null,
  payment_receipt?: File,
  status_verifikasi?: "0" | "1",
  category_id?: number | null,
  language_id?: number | null,
  level_of_participant_id?: number | null,
  certificate?: string,
  reject_reason?: string
}

type ParticipantFormProps = {
  onComplete?: () => void,
  className?: string,
  item?: Participant,
  mode?: 'create' | 'update',
  users?: User[],
  categories?: Category[],
  languages?: Language[],
  level_of_participants?: LevelOfParticipant[],
};

function ParticipantForm({
  onComplete,
  className,
  item,
  mode = 'create',
  users,
  categories,
  languages,
  level_of_participants
}: ParticipantFormProps) {

  const { data, setData, post, patch, processing, errors, wasSuccessful, recentlySuccessful } = useForm<ParticipantInsert>({
    user_id: item?.user_id || null,
    payment_receipt: undefined,
    status_verifikasi: item?.status_verifikasi as Participant['status_verifikasi'] || "0",
    category_id: item?.category_id || null,
    language_id: item?.language_id || null,
    level_of_participant_id: item?.level_of_participant_id || null,
    certificate: item?.certificate,
    reject_reason: item?.reject_reason || "",
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();
    if (mode == 'create') {
      post(route('participant.store'), { forceFormData: true });
    } else if (mode == 'update' && item != undefined) {
      post(route('participant.update', { participant: item?.id, _method: 'PATCH' }), { forceFormData: true });
    }
  };

  useEffect(() => {
    if (wasSuccessful) {
      if (typeof onComplete == 'function') {
        setTimeout(onComplete, 2000)
      }
    }
  }, [wasSuccessful])

  const combo_user: ComboBoxData[] = useMemo(() => {
    if (typeof users != undefined) {
      return users!.map(item => ({ id: item.id, value: item.name }))
    }
    return [];
  }, [users])

  const combo_category: ComboBoxData[] = useMemo(() => {
    if (typeof categories != undefined) {
      return categories!.map(item => ({ id: item.id, value: item.category_name }))
    }
    return [];
  }, [categories])

  const combo_languages: ComboBoxData[] = useMemo(() => {
    if (typeof languages != undefined) {
      return languages!.map(item => ({ id: item.id, value: item.name }))
    }
    return [];
  }, [languages])

  const combo_level_of_participants: ComboBoxData[] = useMemo(() => {
    if (typeof level_of_participants != undefined) {
      return level_of_participants!.map(item => ({ id: item.id, value: item.level_name }))
    }
    return [];
  }, [level_of_participants])

  const [selectedLOP, setSelectedLOP] = useState<ComboBoxData | null>(combo_level_of_participants.find(x => x.id == item?.level_of_participant_id) || null);
  const [selectedUser, setSelectedUser] = useState<ComboBoxData | null>(combo_user.find(x => x.id == item?.user_id) || null);
  const [selectedCategory, setSelectedCategory] = useState<ComboBoxData | null>(combo_category.find(x => x.id == item?.category_id) || null);
  const [selectedLanguage, setSelectedLanguage] = useState<ComboBoxData | null>(combo_languages.find(x => x.id == item?.language_id) || null);

  return (
    <section className={className}>
      <header>
        <h2 className="text-lg font-medium text-gray-900">Tambah Data Tingkatan Partisipan</h2>
      </header>
      <form onSubmit={submit} className="flex flex-col gap-4">
        <div>
          <InputLabel htmlFor="user_id" value="Pilih User" />
          <ComboBoxInput
            data={combo_user}
            id="user_id"
            onChange={(value) => {
              setSelectedUser(value)
              setData('user_id', value.id)
            }}
            value={selectedUser} />
          <InputError message={errors.payment_receipt} className="mt-2" />
        </div>

        <ConditionalRender condition={item?.user.profile !== null}>
          <div>
            <InputLabel htmlFor="whatsapp_contact" value="No HP/WhatsApp" />
            <p className='border py-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm my-2 block w-full'>
              <span className='ml-2'>
                {item?.user.profile?.whatsapp_contact}
              </span>
            </p>
          </div>
        </ConditionalRender>

        <div>
          <InputLabel htmlFor="category_id" value="Pilih Kategori" />
          <ComboBoxInput
            data={combo_category}
            id="category_id"
            onChange={(value) => {
              setSelectedCategory(value)
              setData('category_id', value.id)
            }}
            value={selectedCategory} />
          <InputError message={errors.payment_receipt} className="mt-2" />
        </div>

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
          <InputError message={errors.payment_receipt} className="mt-2" />
        </div>

        <div>
          <InputLabel htmlFor="level_of_participant_id" value="Pilih Tingkatan Partisipan" />
          <ComboBoxInput
            data={combo_level_of_participants}
            id="level_of_participant_id"
            onChange={(value) => {
              setSelectedLOP(value)
              setData('level_of_participant_id', value.id)
            }}
            value={selectedLOP} />
          <InputError message={errors.payment_receipt} className="mt-2" />
        </div>

        <div>
          <InputLabel htmlFor="image" value="Bukti Pembayaran" />
          <TextInput
            id="image"
            type="file"
            name="payment_receipt"
            className="my-2 block w-full"
            autoComplete="image"
            isFocused={true}
            onChange={(e) => {
              if (e.target.files) {
                setData('payment_receipt', e.target.files[0])
              }
            }}
          />

          <InputError message={errors.payment_receipt} className="mt-2" />

          {item?.payment_receipt && (
            <>
              <p>File Sebelumnya:
              </p>
              <a
                className="text-blue-400 hover:text-blue-500"
                href={item.payment_receipt_path}
                target="_blank"
                rel="noopener noreferrer">{item?.payment_receipt_path}</a>
            </>
          )}
        </div>

        <div>
          <InputLabel htmlFor="status_verifikasi" value="Status Verifikasi" />
          <div className="flex flex-row gap-4">
            <label htmlFor="status_verifikasi-l">
              <input type="radio" id="status_verifikasi-l" name="status_verifikasi" value={0} checked={data.status_verifikasi == "0"} onChange={(e) => setData('status_verifikasi', "0")} /> Tidak Terverifikasi
            </label>
            <label htmlFor="status_verifikasi-p">
              <input type="radio" id="status_verifikasi-p" name="status_verifikasi" value={1} checked={data.status_verifikasi == "1"} onChange={(e) => setData('status_verifikasi', "1")} /> Sudah Terverifikasi
            </label>
          </div>
          <InputError className="mt-2" message={errors.status_verifikasi} />
        </div>

        
        <div>
          <InputLabel htmlFor="reject_reason" value="Alasan Gagal Verifikasi" />
          <TextInput
            id="reject_reason"
            name="reject_reason"
            value={data.reject_reason}
            className="my-2 block w-full"
            autoComplete="reject_reason"
            isFocused={true}
            onChange={(e) => setData('reject_reason', e.target.value)}
          />
          <InputError message={errors.reject_reason} className="mt-2" />
        </div>

        <div>
          <InputLabel htmlFor="certificate" value="Link Sertifikat" />
          <TextInput
            id="name"
            name="name"
            value={data.certificate}
            className="my-2 block w-full"
            autoComplete="name"
            isFocused={true}
            onChange={(e) => setData('certificate', e.target.value)}
          />
          <InputError message={errors.certificate} className="mt-2" />
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

export default ParticipantForm