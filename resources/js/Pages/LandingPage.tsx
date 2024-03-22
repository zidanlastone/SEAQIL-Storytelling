import ApplicationLogo from '@/Components/ApplicationLogo';
import Guest from '@/Layouts/GuestLayout';
import Navbar from '@/Layouts/Partials/Navbar';
import { PageProps } from '@/types'
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Head, Link } from '@inertiajs/react'
import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Kategori Peserta', href: '#kategori-lomba' },
  { name: 'Tata Cara Partisipasi ', href: '#teknis-lomba' },
  // { name: 'Kontak', href: '#' },
  // { name: 'FAQ', href: '#' },
]

function LandingPage({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <>
      <Head title="SEAQIL Storytelling" />
      <div className="bg-white">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              <a href="#" className="-m-1.5 p-1.5 leading-6">
                <span className="sr-only">SEAQIL Storytelling</span>
                <ApplicationLogo className="h-8 w-auto" />
              </a>
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              {auth.user ? (
                <div className="leading-6 text-sm">
                  <Link
                    href={route('dashboard')}
                    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] "
                  >
                    Dashboard
                  </Link>
                </div>
              ) : (

                <div className="leading-6 text-sm">
                  <Link
                    href={route('login')}
                    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] "
                  >
                    Log in <span aria-hidden="true">&rarr;</span>
                  </Link>
                  <Link
                    href={route('register')}
                    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] "
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </nav>
          <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">SEAQIL Storytelling</span>
                  <ApplicationLogo className="h-8 w-auto" />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  {auth.user ? (
                    <div className="py-6">
                      <Link
                        href={route('dashboard')}
                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                      >
                        Dashboard
                      </Link>
                    </div>
                  ) : (
                    <div className="py-6">
                      <Link
                        href={route('login')}
                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                      >
                        Log in
                      </Link>
                      <Link
                        href={route('register')}
                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                      >
                        Register
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>

        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-30 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#e78282] to-[#4e42f7] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="mx-auto max-w-7xl py-12 sm:py-22 lg:py-">

            <div className="justify-center">
              <Swiper
                pagination={{
                  dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper rounded-md"
              >
                <SwiperSlide>
                  <img className="rounded-lg" src="https://training.qiteplanguage.org/assets/uploads/pelatihan/foto/20072022_CerPen_Rima.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="rounded-lg" src="https://training.qiteplanguage.org/assets/uploads/pelatihan/foto/20072022_CerPen_Rima.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img className="rounded-lg" src="https://training.qiteplanguage.org/assets/uploads/pelatihan/foto/20072022_CerPen_Rima.png" alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#e78282] to-[#4e42f7] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 space-y-10 my-16">
          <div className="text-left">
            <h1 className="text-xl font-bold tracking-tight leading-6 text-gray-600 sm:text-3xl">
              Kompetisi Mendongeng Tingkat Nasional
            </h1>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="order-start mt-6 w-full md:w-1/4 bg-gradient-to-br from-blue-500 to-red-500 rounded-2xl flex-col gap-6 p-4 h-64 shadow=sm">
                <img className='h-3/5 mx-auto' src="/image/tridaya-group.png" alt="/image/tridaya-group.png" />
                <img className='h-2/5 mx-auto' src="/image/UPI.png" alt="/image/UPI.png" />
              </div>
              <p className="order-end mt-6 text-md w-full md:w-3/4 leading-8 text-gray-600">
                Salah satu upaya mengkombinasikan antara metode konvensional mendongeng dengan penetrasi digital serta keunikan ragam budaya Indonesia yaitu melalui sebuah kompetisi mendongeng untuk siswa SD, SMP, SMA, Umum & Mahasiswa, Lembaga Pendidikan Tridaya (Tridaya Group) bekerja sama dengan Fakultas Pendidkan Bahasa dan Sastra Universitas Pendidikan Indonesia (FPBS UPI) dan SEAMEO Regional Center for Quality Improvement of Teachers and Education Personnel (QITEP) in Language (SEAQIL) akan menyelenggarakan kegiatan yang berjudul KOMPETISI MENDONGENG DI ERA DIGITAL TINGKAT NASIONAL TAHUN 2024.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 space-y-10 my-16" id="kategori-lomba">
          <div className="text-left">
            <h1 className="text-xl text-center font-bold tracking-tight leading-6 text-gray-600 sm:text-3xl">
              Kategori Lomba
            </h1>
            <div className="flex flex-col md:flex-row flex-wrap gap-6 my-16 justify-center">
                <div className="w-1/4 bg-white shadow-md rounded-md p-4 text-center">
                  Sekolah Dasar
                </div>
                <div className="w-1/4 bg-white shadow-md rounded-md p-4 text-center">
                  Sekolah Menengah Pertama
                </div>
                <div className="w-1/4 bg-white shadow-md rounded-md p-4 text-center">
                  Sekolah Menengah Atas                  
                </div>
                <div className="w-1/4 bg-white shadow-md rounded-md p-4 text-center">
                  Mahasiswa
                </div>
                <div className="w-1/4 bg-white shadow-md rounded-md p-4 text-center">
                  Guru
                </div>
                <div className="w-1/4 bg-white shadow-md rounded-md p-4 text-center">
                  Umum
                </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 space-y-10 my-16" id="teknis-lomba">
          <div className="text-left">
            <h1 className="text-xl font-bold tracking-tight leading-6 text-gray-600 sm:text-3xl">
              Teknis Pelaksanaan Lomba
            </h1>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="order-start mt-6 w-3/4 text-md leading-8 text-gray-600">
                <p>Batas waktu pendaftaran: 25 April 2024</p>
                <p>Teknikal Meeting dan Webinar: 27 April 2024</p>
                <p>Pengumpulan Karya Video Lomba: 27 April - 11 Mei 2024</p>
                <p>Babak Final: 21 Mei 2024
                <p>
                Biaya pendaftaran lomba sebesar Rp.50.000 per orang. 
                Pastikan telah melakukan transfer pembayaran biaya pendaftaran sebelum mengisi form data peserta ini. Transfer dapat dilakukan melalui rekening Virtual Account BNI 9882 4474 2223 1991 Atas Nama TRIDAYA OLIMPIADE.</p>
                </p>
              </div>
            </div>
          </div>
        </div>


        <footer className="w-full bg-blue-400 rounded-t-xl">
          <div className="flex flex-row">
            <div className="flex-auto w-1/6">
              <img className="w-auto mx-auto p-4" src="https://training.qiteplanguage.org/assets2/images/logo.png" />
            </div>
            <div className="flex-auto w-5/6 items-center justify-center text-center">
              <p className="mt-8">Copyright ©2024 All rights reserved | This Website is made with  by ICT SEAQIL</p>
            </div>
          </div>
        </footer>


      </div>
    </>
  )
}

export default LandingPage