import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { PageProps, Participant } from '@/types';
import PrimaryButton from '@/Components/PrimaryButton';
import ConditionalRender from '@/Components/ConditionalRender';
import AdminLayout from '@/Layouts/AdminLayout';
import InputLabel from '@/Components/InputLabel';


type DashboardProps = {
  participation?: Participant,
  counts: {
    participant_count: number,
    verified_participant_count: number,
    uploaded_creation_count: number,
    notuploaded_creation_count: number
  }
}


export default function Dashboard({ auth, participation, counts }: PageProps<DashboardProps>) {

  console.log(!participation?.reject_reason, participation?.reject_reason != null, (participation?.reject_reason !== "" || participation?.reject_reason != null))
  return (
    <AdminLayout
      roles={auth.roles}
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
    >
      <Head title="Dashboard" />

      <div className="py-2">
        <div className="w-full mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">

              <h2 className="text-lg">Selamat Datang {auth.user.name}</h2>

              <div className="flex flex-row gap-2 my-6 justify-between text-center">
                <div className="w-1/4 p-6 border-2 text-center rounded">
                  <p>Jumlah Pendaftar </p>
                  <p>{counts.participant_count}</p>
                </div>
                <div className="w-1/4 p-6 border-2 text-center rounded">
                  <p>Jumlah Pendaftar Terverifikasi</p>
                  <p>{counts.verified_participant_count}</p>
                </div>
                <div className="w-1/4 p-6 border-2 text-center rounded">
                  <p>Karya sudah di unggah</p>
                  <p>{counts.uploaded_creation_count}</p>
                </div>
                <div className="w-1/4 p-6 border-2 text-center rounded">
                  <p>Karya belum di unggah </p>
                  <p>{counts.notuploaded_creation_count}</p>
                </div>
              </div>

              <ConditionalRender condition={participation != undefined && auth.roles.includes('participant')}>
                <p>Pendaftaran Anda sudah berhasil. Saat ini sedang dilakukan proses verfikasi pembayaran oleh panitia</p>
                <br />
                <table>
                  <tbody className="text-lg">
                    <tr>
                      <td>
                        <p>Pendaftaran Peserta</p>
                      </td>
                      <td>
                        <div className="flex flex-row items-center">:
                          <ConditionalRender condition={participation?.status_verifikasi != null}>
                            <div className="flex flex-row text-green-500 items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                              </svg>
                              <p>Sudah Mendaftar</p>
                            </div>
                          </ConditionalRender>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Verifikasi Oleh Panitia</p>
                      </td>
                      <td>
                        <div className="flex flex-row items-center">
                          :
                          <ConditionalRender condition={(participation?.status_verifikasi == "0" && !participation?.reject_reason) as boolean}>
                            <div className="flex flex-row text-yellow-600 items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                              </svg>
                              <p>Sedang Verifikasi</p>
                            </div>
                          </ConditionalRender>

                          <ConditionalRender condition={(participation?.status_verifikasi == "0" && participation?.reject_reason) as boolean}>
                            <div className="flex flex-row text-red-600 items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                              </svg>
                              <p>Ditolak</p>
                            </div>
                          </ConditionalRender>

                          <ConditionalRender condition={participation?.status_verifikasi == "1"}>
                            <div className="flex flex-row text-green-500 items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                              </svg>
                              <p>Sudah Verifikasi</p>
                            </div>
                          </ConditionalRender>
                        </div>
                      </td>
                    </tr>

                    <ConditionalRender condition={(participation?.status_verifikasi == "0" && participation?.reject_reason) as boolean}>
                      <tr>
                        <td></td>
                        <td>
                          <div className="flex flex-row text-red-500 items-center">
                            *
                            <p className='ml-2'>{participation?.reject_reason}</p>
                          </div>
                        </td>
                      </tr>
                    </ConditionalRender>

                    <tr>
                      <td>
                        <p>Status Unggah Karya</p>
                      </td>
                      <td>
                        <div className="flex flex-row items-center">
                          :
                          <ConditionalRender condition={participation?.creation?.upload_status == "0"}>
                            <div className="flex flex-row text-red-600 items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                              </svg>

                              <p>Belum Ungah Karya</p>
                            </div>
                          </ConditionalRender>
                          <ConditionalRender condition={participation?.creation?.upload_status == "1"}>
                            <div className="flex flex-row text-green-500 items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                              </svg>
                              <p>Sudah Ungah Karya</p>
                            </div>
                          </ConditionalRender>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Seleksi Karya</p>
                      </td>
                      <td>
                        <div className="flex flex-row items-center">
                          :
                          <ConditionalRender condition={participation?.creation?.upload_status != "2"}>
                            <div className="flex flex-row text-yellow-600 items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                              </svg>
                              <p>Belum Seleksi</p>
                            </div>
                          </ConditionalRender>
                          <ConditionalRender condition={participation?.creation?.upload_status == "2"}>
                            <div className="flex flex-row text-yellow-500 items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                              </svg>
                              <p>Proses Seleksi</p>
                            </div>
                          </ConditionalRender>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Sertifikat</p>
                      </td>
                      <td>
                        <div className="flex flex-row items-center">
                          :
                          <ConditionalRender condition={participation?.certificate == null || participation?.certificate == ""}>
                            <div className="flex flex-row text-yellow-600 items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                              </svg>
                              <p>Belum Tersedia</p>
                            </div>
                          </ConditionalRender>
                          <ConditionalRender condition={participation?.certificate != null && participation?.certificate != ""}>
                            <div className="flex flex-row text-blue-500 items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                              </svg>
                              <p>
                                <a href={participation?.certificate} target='_blank'>Unduh</a>
                              </p>
                            </div>
                          </ConditionalRender>
                        </div>
                      </td>
                    </tr>

                  </tbody>
                </table>

                <br />
                <p>Silakan bergabung juga ke grup Whatsapp  <a className='text-blue-400' href="https://bit.ly/PesertaKompetisiMendongeng2024 " target='_blank'>https://bit.ly/PesertaKompetisiMendongeng2024</a>
                  dan telegram <a className='text-blue-400' href="https://bit.ly/PesertaKompetisiMendongeng2024_Tele" target="_blank">https://bit.ly/PesertaKompetisiMendongeng2024_Tele</a> untuk mendapatkan update informasi terbaru.</p>
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
    </AdminLayout>
  );
}
