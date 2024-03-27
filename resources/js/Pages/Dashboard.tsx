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
                                <p>Pendaftaran Anda sudah berhasil. Saat ini sedang dilakukan proses verfikasi pembayaran oleh panitia</p>
                                
                                <br />

                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <p>Pendaftaran Peserta</p>
                                            </td>
                                            <td>
                                                <p>:Sudah mendaftar</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p>Verifikasi Oleh Panitia</p>
                                            </td>
                                            <td>
                                                <p>: Proses Verifikasi</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p>Status Unggah Karya</p>
                                            </td>
                                            <td>
                                                <p>: Proses Verifikasi</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p>Seleksi Karya</p>
                                            </td>
                                            <td>
                                                <p>: Proses Verifikasi</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p>Sertifikat</p>
                                            </td>
                                            <td>
                                                <p>: Sertifikat</p>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>

                                <br />
                                <p>Silakan bergabung juga ke grup Whatsapp http://xxxx dan telegram http://xxx untuk mendapatkan update informasi terbaru.</p>
                                <br />

                                <div>
                                    <h4 className="text-lg font-semibold">Linimasa Kompetisi Mendongeng</h4>
                                    <ol className="list-decimal list-inside">
                                        <li>Pendaftaran Peserta: 29 Maret - 31 Mei 2024</li>
                                        <li>Pengumpulan Karya (Penyisihan): 29 Maret—31 Mei 2024</li>
                                        <li>Pengumuman Finalis: 13 Juni 2024</li>
                                        <li>Babak Final: 20 Juni 2024</li>
                                    </ol>
                                </div>
                            </ConditionalRender>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
