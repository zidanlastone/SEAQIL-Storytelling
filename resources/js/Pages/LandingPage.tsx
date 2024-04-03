import ApplicationLogo from '@/Components/ApplicationLogo';
import { Category, PageProps, PageSection, Slider } from '@/types'
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Head, Link } from '@inertiajs/react'
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import SponsorHeader from '@/Components/SponsorHeader';
import ConditionalRender from '@/Components/ConditionalRender';

const navigation = [
  { name: 'Beranda', href: '/' },
  { name: 'Kategori Peserta', href: '/' + '#kategori-lomba' },
  { name: 'Mekanisme Pelaksanaan', href: '/' + '#teknis-lomba' },
  // { name: 'Kontak', href: '#' },
  { name: 'Q & A', href: '/qna' },
]

type LandingPageProps = {
  laravelVersion: string,
  phpVersion: string,
  sliders: Slider[],
  categories: Category[],
  deskripsi_lomba?: PageSection
  mekanisme_pelaksanaan?: PageSection
}

function LandingPage({ auth, sliders = [], categories = [], deskripsi_lomba, mekanisme_pelaksanaan }: PageProps<LandingPageProps>) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <Head title="SEAQIL Storytelling" />
      <div className="bg-white">
        <header className="absolute inset-x-0 top-0 z-50">
          <SponsorHeader />
          <nav className="flex items-center justify-between px-6 md:py-2 lg:px-8" aria-label="Global">
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
              </a>
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-lg font-semibold leading-6 text-gray-900">
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              {auth.user ? (
                <div className="leading-6 text-md">
                  <Link
                    href={route('dashboard')}
                    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] "
                  >
                    Dashboard
                  </Link>
                </div>
              ) : (

                <div className="leading-6 text-md">
                  <Link
                    href={route('login')}
                    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] "
                  >
                    Log in <span aria-hidden="true">&rarr;</span>
                  </Link>
                  <Link
                    href={route('register.participant')}
                    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] "
                  >
                    Registrasi Peserta
                  </Link>
                </div>
              )}
            </div>
          </nav>
          <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-8 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">SEAQIL Storytelling</span>
                </a>
                <button
                  type="button"
                  className="-m-3.5 rounded-md p-2.5 text-gray-700"
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
                  <div className="w-4/5 -ml-4">
                    {auth.user ? (
                      <div className="py-6">
                        <Link
                          href={route('dashboard')}
                          className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] "
                        >
                          Dashboard
                        </Link>
                      </div>
                    ) : (
                      <div className="py-6">
                        <Link
                          href={route('login')}
                          className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] "
                        >
                          Log in
                        </Link>
                        <Link
                          href={route('register.participant')}
                          className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] "
                        >
                          Registrasi Peserta
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>

        <div className="relative isolate px-6 pt-16 lg:px-8">
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
          <div className="mx-auto max-w-7xl py-8 sm:py-22 lg:py-28">

            <div className="justify-center">
              <Swiper
                pagination={{
                  dynamicBullets: true,
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper rounded-md"
              >
                {sliders.map(item => {
                  if (item.type == 'image') {
                    return (
                      <SwiperSlide key={item.id}>
                        <img className="rounded-lg w-full" src={'/storage/' + item.source} alt="" />
                      </SwiperSlide>
                    )
                  }
                  if (item.type == 'video') {
                    return (
                      <SwiperSlide key={item.id}>
                        <video className="rounded-lg w-full" controls>
                          <source src={'/storage/' + item.source} />
                        </video>
                      </SwiperSlide>
                    )
                  }
                })}
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

        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 space-y-5 my-2">
          <div className="text-left">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="order-start mt-6 w-full md:w-1/4 bg-gradient-to-br from-blue-500 to-red-500 rounded-2xl flex-col gap-6 p-4 shadow=sm">
                <video className="w-full" controls>
                  <source src="/video/intro-video-v2.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="order-end mt-6 text-md w-full md:w-3/4">
                <h1 className="text-xl font-bold tracking-tight leading-6 text-gray-600 sm:text-3xl my-4">
                KOMPETISI MENDONGENG MULTIBAHASA DI ERA DIGITAL
                </h1>
                <p className=" leading-8 text-gray-600 my-2">
                  Merupakan upaya pengkombinasian antara metode mendongeng konvensional dengan penetrasi digital serta keunikan ragam budaya Indonesia, yaitu melalui sebuah kompetisi mendongeng untuk jenjang SD, SMP, SMA, Mahasiswa, Guru, dan Umum. Kegiatan ini merupakan kompetisi pada tingkat Nasional. Lembaga Pendidikan Tridaya (Tridaya Group) bekerja sama dengan Fakultas Pendidikan Bahasa dan Sastra Universitas Pendidikan Indonesia (FPBS UPI) dan SEAMEO Regional Center for Quality Improvement of Teachers and Education Personnel (QITEP) in Language (SEAQIL) akan menyelenggarakan kegiatan yang berjudul KOMPETISI MENDONGENG MULTIBAHASA DI ERA DIGITAL TINGKAT NASIONAL 2024.
                </p>
                <p className=" leading-8 text-gray-600 my-2">
                  Kompetisi ini dapat dijadikan ajang mempromosikan keanekaragaman budaya dan linguistik di tengah konektivitas global. Melalui kompetisi ini, peserta dari berbagai latar belakang budaya dan bahasa dapat berbagi cerita dalam bahasa asli mereka atau bahasa lain yang mereka kuasai, menciptakan sebuah lingkungan yang kaya akan keberagaman. Selain itu, dengan dukungan teknologi digital, kompetisi ini juga mendorong inovasi dalam presentasi cerita, memungkinkan penggunaan berbagai alat bantu digital seperti animasi dan visualisasi interaktif untuk meningkatkan pengalaman mendengarkan. Ini membawa cerita-cerita dari berbagai tradisi ke era digital dengan cara yang menarik dan relevan, menciptakan pengalaman mendongeng yang lebih mendalam dan menyeluruh bagi para pendengar.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 space-y-10 my-16" id="kategori-lomba">
          <div className="text-left">
            <h1 className="text-xl text-center font-bold tracking-tight leading-6 text-gray-600 sm:text-3xl">
              Kategori Lomba
            </h1>
            <div className="grid grid-cols-2 md:flex md:flex-row flex-wrap gap-6 my-16 justify-center items-center">
              {categories.map(item => {
                return (
                  <Link key={item.id} href={route('landing.category', { category: item.id })} className="w-full md:w-1/4 bg-white shadow-md rounded-md p-4 text-center">
                    <img src={'/storage/' + item.image} alt={item.category_name} />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-10 my-16" id="teknis-lomba">
          <div className="text-left">
            <h1 className="text-xl font-bold tracking-tight leading-6 text-gray-600 sm:text-3xl">
              Mekanisme Pelaksanaan
            </h1>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="order-start mt-6 w-full md:w-3/4 text-md leading-8 text-gray-600 text-wrap">

                {/* <div dangerouslySetInnerHTML={{ __html: mekanisme_pelaksanaan?.content }}></div> */}

                <ol className="list-decimal list-inside my-6 text-balance break-words">
                  <li>
                  Peserta yang akan mendaftar, terlebih dahulu harus melakukan proses transfer biaya pendaftaran kompetisi sebesar Rp.50.000 per orang ke nomor Virtual Account (VA) Bank BNI 9882 4474 2223 1991 atas nama TRIDAYA OLIMPIADE (Simpan dokumentasi bukti transfer)
                  </li>
                  <li>
                  Peserta melakukan pendaftaran kompetisi melalui laman 
                    <a href="https://kompetisimendongeng.qiteplanguage.org/register-participant" className="mx-1 text-blue-400 hover:tetx-blue-500 text-wrap" target="_blank" rel="noopener noreferrer">
                      https://kompetisimendongeng.qiteplanguage.org
                    </a>
                    dengan melampirkan bukti transfer pembayaran dalam format file gambar (png, jpg) atau pdf.
                  </li>
                  <li>
                    Setelah proses pendaftaran, panitia akan melakukan verifikasi bukti pembayaran.
                  </li>
                  <li>
                    Peserta wajib bergabung ke dalam grup telegram atau whatsapp yang dikirim ke email saat proses pendaftaran atau dapat dilihat di laman dashboard peserta setelah login.
                  </li>
                  <li>
                    Karya yang dilombakan dalam kompetisi ini di Babak Penyisihan berupa video mendongeng yang dibuat oleh peserta dengan tema dongeng : “Ragam Budaya Nusantara”.
                  </li>

                  <li>
                    Peserta yang lulus proses verifikasi, mengumpulkan karya dengan mekanisme pengumpulan sebagai berikut:
                    <ol className="list-alpha list-inside ml-4 text-wrap">
                      <li>a.	Login pada laman <a href="https://kompetisimendongeng.qiteplanguage.org/login" className="mx-1 text-blue-400 hover:text-blue-500 text-wrap" target="_blank" rel="noopener noreferrer">
                        https://kompetisimendongeng.qiteplanguage.org
                        </a> menggunakan email dan password yang telah didaftarkan;
                      </li>
                      <li>b.	Masuk ke menu “Unggah Karya”;</li>
                      <li>c.	Klik tautan unggah karya/video, kemudian unggah hasil karya ke dalam folder google drive yang telah disediakan;</li>
                      <li>d.  Kembali ke laman unggah karya, lalu contreng (V) pernyataan bahwa peserta telah mengunggah hasil karya</li>
                      <li>e.	Klik “Daftarkan Karya” untuk mengirimkan pernyataan dan hasil karya dapat dinilai oleh panitia/juri;</li>
                    </ol>
                  </li>
                  <li>
                    Pada Babak Penyisihan, karya video lomba peserta yang lulus verifikasi sesuai ketentuan video yang dibuat, akan dilakukan penilaian oleh dewan juri dan akan ditentukan peserta yang lolos ke babak selanjutnya (Babak Final).
                  </li>
                  <li>
                    Pada Babak Final, akan dilakukan secara daring melalui zoom, peserta akan diminta menampilkan/perform live online mendongeng di depan dewan juri dengan cerita dongeng yang berbeda dari karya yang dikumpulkan pada saat Babak Penyisihan.
                  </li>
                  <li>
                    Ketentuan lomba di Babak Final akan dibahas lebih detail di teknikal meeting.
                  </li>
                  <li>
                    Pengumuman dan informasi lainnya akan disampaikan secara berkala melalui grup whatsapp atau telegram peserta lomba.
                  </li>

                </ol>

                <div className='my-4'>
                  <h2 className='text-lg font-semibold'>Narahubung</h2>
                  <p className='text-lg font-semibold'><a className='text-blue-400 hover:text-blue-500' href="tel:+6281223337333">0812-2333-7333</a> (WINA)</p>
                  <p className='text-lg font-semibold'><a className='text-blue-400 hover:text-blue-500' href="tel:+628567788023">0856-7788-023</a> (ERI)</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold">Linimasa Kompetisi Mendongeng</h4>
                  <ol className="list-decimal list-inside">
                    <li>Pendaftaran Peserta: 29 Maret - 31 Mei 2024</li>
                    <li>Pengumpulan Karya (Penyisihan): 29 Maret—31 Mei 2024</li>
                    <li>Pengumuman Finalis: 13 Juni 2024</li>
                    <li>Babak Final: 20 Juni 2024</li>
                  </ol>
                </div>

              </div>
            </div>
          </div>
        </div>


        <footer className="w-full bg-blue-600 rounded-t-xl">
          <div className="flex flex-row">
            <div className="flex-auto w-5/6 items-center justify-center text-center py-16">
              <p>Didukung Oleh:</p>
              <div className="flex flex-row justify-center">
                <div className="h-12 w-36  p-1 m-1">
                  <img className="object-cover" src="/image/sponsors/cgv-cinema.png" alt="tutwurihandayani" />
                </div>
                <div className="h-12 w-28 p-1 m-1">
                  <img className="object-contain" src="/image/sponsors/sierra.png" alt="upi" />
                </div>
              </div>
            </div>
          </div>
        </footer>


      </div>
    </>
  )
}

export default LandingPage