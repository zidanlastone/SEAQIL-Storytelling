import { useEffect, FormEventHandler, useMemo, useState } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import ComboBoxInput, { ComboBoxData } from '@/Components/ComboBoxInput';
import { Language, Category, LevelOfParticipant } from '@/types';


type RegisterParticipantProps = {
  languages: Language[],
  categories: Category[],
  level_of_participants: LevelOfParticipant[],
};

type InputRegisterParticipant = {
  name: string,
  email: string,
  password: string,
  password_confirmation: string,

  // detail informasi penguna
  gender: string,
  whatsapp_contact: string,
  parent_contact: string,
  institution: string,
  country: string,
  province: string,
  city: string,
  address: string,

  // partisipasi lomba
  payment_receipt: undefined,
  category_id: number,
  language_id: number,
  level_of_participant_id: number,
};

export default function RegisterParticipant({
  languages, categories, level_of_participants
}: RegisterParticipantProps) {
  const { data, setData, post, processing, errors, reset } = useForm<InputRegisterParticipant>({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',

    // detail informasi penguna
    gender: 'L',
    whatsapp_contact: '',
    parent_contact: '',
    institution: '',
    country: '',
    province: '',
    city: '',
    address: '',

    // partisipasi lomba
    payment_receipt: undefined,
    category_id: 0,
    language_id: 0,
    level_of_participant_id: 0,
  });

  useEffect(() => {
    return () => {
      reset('password', 'password_confirmation');
    };
  }, []);

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    post(route('register.participant'));
  };

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

  const [selectedLOP, setSelectedLOP] = useState<ComboBoxData | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<ComboBoxData | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<ComboBoxData | null>(null);


  return (
    <GuestLayout>
      <Head title="Register" />

      <form onSubmit={submit}>
        <div>
          <InputLabel htmlFor="name" value="Name" />

          <TextInput
            id="name"
            name="name"
            value={data.name}
            className="mt-1 block w-full"
            autoComplete="name"
            isFocused={true}
            onChange={(e) => setData('name', e.target.value)}
            required
          />

          <InputError message={errors.name} className="mt-2" />
        </div>

        <div className="mt-4">
          <InputLabel htmlFor="email" value="Email" />

          <TextInput
            id="email"
            type="email"
            name="email"
            value={data.email}
            className="mt-1 block w-full"
            autoComplete="username"
            onChange={(e) => setData('email', e.target.value)}
            required
          />

          <InputError message={errors.email} className="mt-2" />
        </div>

        <div className="mt-4">
          <InputLabel htmlFor="password" value="Password" />

          <TextInput
            id="password"
            type="password"
            name="password"
            value={data.password}
            className="mt-1 block w-full"
            autoComplete="new-password"
            onChange={(e) => setData('password', e.target.value)}
            required
          />

          <InputError message={errors.password} className="mt-2" />
        </div>

        <div className="mt-4">
          <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

          <TextInput
            id="password_confirmation"
            type="password"
            name="password_confirmation"
            value={data.password_confirmation}
            className="mt-1 block w-full"
            autoComplete="new-password"
            onChange={(e) => setData('password_confirmation', e.target.value)}
            required
          />

          <InputError message={errors.password_confirmation} className="mt-2" />
        </div>

        <hr className='my-4' />
        <br />

        <h3>Detail Informasi</h3>
        <div>
          <InputLabel htmlFor="gender" value="Jenis Kelamin" />
          <div className="flex flex-row gap-4">
            <label htmlFor="gender-l">
              <input type="radio" id="gender-l" name="gender" value={"L"} checked={data.gender == 'L'} onChange={(e) => setData('gender', 'L')} /> Laki-Laki
            </label>
            <label htmlFor="gender-p">
              <input type="radio" id="gender-p" name="gender" value={"P"} checked={data.gender == 'P'} onChange={(e) => setData('gender', 'P')} /> Perempuan
            </label>
          </div>
          <InputError className="mt-2" message={errors.gender} />
        </div>

        <div>
          <InputLabel htmlFor="whatsapp_contact" value="Nomor Whatsapp" />
          <TextInput
            id="whatsapp_contact"
            type="tel"
            className="mt-1 block w-full"
            value={data.whatsapp_contact as string}
            onChange={(e) => setData('whatsapp_contact', e.target.value)}
            required
            autoComplete="phone"
          />

          <InputError className="mt-2" message={errors.whatsapp_contact} />
        </div>

        <div>
          <InputLabel htmlFor="parent_contact" value="Nomor Whatsapp Orang Tua" />

          <TextInput
            id="parent_contact"
            type="tel"
            className="mt-1 block w-full"
            value={data.parent_contact as string}
            onChange={(e) => setData('parent_contact', e.target.value)}
            required
            autoComplete="phone"
          />

          <InputError className="mt-2" message={errors.parent_contact} />
        </div>

        <div>
          <InputLabel htmlFor="institution" value="Institusi" />

          <TextInput
            id="institution"
            type="text"
            className="mt-1 block w-full"
            value={data.institution as string}
            onChange={(e) => setData('institution', e.target.value)}
            required
            placeholder="Contoh: Universitas Indonesia"
            autoComplete="institution"
          />

          <InputError className="mt-2" message={errors.parent_contact} />
        </div>

        <div>
          <InputLabel htmlFor="country" value="Negara" />

          <TextInput
            id="country"
            type="text"
            className="mt-1 block w-full"
            value={data.country as string}
            onChange={(e) => setData('country', e.target.value)}
            required
            placeholder="Contoh: Indonesia"
            autoComplete="country"
          />

          <InputError className="mt-2" message={errors.institution} />
        </div>

        <div>
          <InputLabel htmlFor="province" value="Provinsi" />

          <TextInput
            id="province"
            type="text"
            className="mt-1 block w-full"
            value={data.province as string}
            onChange={(e) => setData('province', e.target.value)}
            required
            placeholder="Contoh: Jawa Barat"
            autoComplete="province"
          />

          <InputError className="mt-2" message={errors.province} />
        </div>

        <div>
          <InputLabel htmlFor="city" value="Kabupaten / Kota" />

          <TextInput
            id="city"
            type="text"
            className="mt-1 block w-full"
            value={data.city as string}
            onChange={(e) => setData('city', e.target.value)}
            required
            placeholder="Contoh: Bogor"
            autoComplete="city"
          />

          <InputError className="mt-2" message={errors.city} />
        </div>

        <div>
          <InputLabel htmlFor="address" value="Alamat Lengkap" />

          <textarea
            className="w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "
            name="address" id="address" rows={3}
            defaultValue={data.address}
            onChange={(e) => setData('address', e.target.value)} />

          <InputError className="mt-2" message={errors.address} />
        </div>

        <hr />
        <h2>Data Partisipasi Lomba</h2>

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
            onChange={(e: any) => {
              if (e.target.files ) {
                setData('payment_receipt', e.target.files[0])
              }
            }}
          />

          <InputError message={errors.payment_receipt} className="mt-2" />

        </div>

        <div className="flex items-center justify-end mt-4">
          <Link
            href={route('login')}
            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Already registered?
          </Link>

          <PrimaryButton className="ms-4" disabled={processing}>
            Register
          </PrimaryButton>
        </div>
      </form>
    </GuestLayout>
  );
}
