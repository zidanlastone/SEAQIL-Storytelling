import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { PageProps } from '@/types';
import PrimaryButton from '@/Components/PrimaryButton';
import ConditionalRender from '@/Components/ConditionalRender';

export default function Dashboard({ auth, roles }: PageProps) {

    
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            

                            <h2 className="text-lg">Selamat Datang {auth.user.name}</h2>

                            <ConditionalRender condition={auth.roles.includes('participant')}>
                                <p>Pendaftaran Anda sudah berhasil. Saat ini sedang dilakukan proses verfiikasi pembayaran oleh panitia</p>

                                <br />
                                <p>Harap Lengkapi profil anda</p>
                                <Link className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 " href={route('profile.edit')}>
                                    Lengkapi Profil
                                </Link>                    
                            </ConditionalRender>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
