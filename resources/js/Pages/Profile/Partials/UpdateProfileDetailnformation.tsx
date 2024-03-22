import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import { FormEventHandler } from 'react';
import { PageProps, Profile } from '@/types';


interface ProfilePassword extends Profile {
    password: string;
}

export default function UpdateProfileDetailInformation({ mustVerifyEmail, status, className = '', profile }: { mustVerifyEmail: boolean, status?: string, className?: string, profile?: Profile }) {
    const user = usePage<PageProps>().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm<ProfilePassword>({
        gender: profile?.gender || 'L',
        whatsapp_contact: profile?.whatsapp_contact || '',
        parent_contact: profile?.parent_contact || '',
        institution: profile?.institution || '',
        country: profile?.country || '',
        province: profile?.province || '',
        city: profile?.city || '',  
        address: profile?.address || '',
        password: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        patch(route('profile.update.detail'));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Detail Informasi Pengguna</h2>

                <p className="mt-1 text-sm text-gray-600">
                    Ubah Informasi lengkap mengenai profil anda
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 grid grid-rows-2 gap-4 w-full">
                <div>
                    <InputLabel htmlFor="gender" value="Jenis Kelamin" />
                    <div className="flex flex-row gap-4">
                        <label htmlFor="gender-l">
                            <input type="radio" id="gender-l" name="gender" value={"L" as Profile['gender']} checked={data.gender == 'L'} onChange={(e) => setData('gender', 'L')} /> Laki-Laki
                        </label>
                        <label htmlFor="gender-p">
                            <input type="radio" id="gender-p" name="gender" value={"P" as Profile['gender']} checked={data.gender == 'P'} onChange={(e) => setData('gender', 'P')} /> Perempuan
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

                <div>
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        type="password"
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="text-sm mt-2 text-gray-800">
                            Your email address is unverified.
                            <Link
                                href={route('verification.send')}
                                method="post"
                                as="button"
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === 'verification-link-sent' && (
                            <div className="mt-2 font-medium text-sm text-green-600">
                                A new verification link has been sent to your email address.
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
