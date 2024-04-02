import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import AdminLayout from '@/Layouts/AdminLayout';
import { PageProps, Participant } from '@/types';
import { Head } from '@inertiajs/react';
import React, { useState } from 'react'
import UpdateCreationTitle from '../Creation/Partials/UpdateCreationTitle';

type ParticipantDetailPageProps = {
  participant: Participant
};
function Detail({
  auth,
  participant,
}: PageProps<ParticipantDetailPageProps>) {

  console.log(participant)

  const [updateMode, setUpdateMode] = useState<boolean>(false);

  return (
    <AdminLayout
      roles={auth.roles}
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Detail Partisipan</h2>}>

      <Head title="Detail Partisipan" />

      <div className="py-2">
        <div className="w-full mx-auto sm:px-6 lg:px-8 space-y-6">
          <section className="p-4 sm:p-8 w-full bg-white shadow sm:rounded-lg">

            <div className="grid grid-cols-2 gap-4">
              <div>
                <InputLabel>Nama Peserta</InputLabel>
                <TextInput className="w-full" value={participant.user.name} readOnly />
              </div>
              <div>
                <InputLabel>Email Peserta</InputLabel>
                <TextInput className="w-full" value={participant.user.email} readOnly />
              </div>
              <div className="col-span-2">
                <InputLabel>Jenis Kelamin</InputLabel>
                <TextInput className="w-full" value={participant.user.profile?.gender == 'L' ? 'Laki-Laki' : 'Perempuan'} readOnly />
              </div>

              <div>
                <InputLabel>Nomor WhatsApp</InputLabel>
                <TextInput className="w-full" value={participant.user.profile?.whatsapp_contact} readOnly />
              </div>

              <div>
                <InputLabel>Nomor WhatsApp Orang Tua</InputLabel>
                <TextInput className="w-full" value={participant.user.profile?.parent_contact} readOnly />
              </div>

              <div>
                <InputLabel>Institusi</InputLabel>
                <TextInput className="w-full" value={participant.user.profile?.institution} readOnly />
              </div>
              <div>
                <InputLabel>Negara Asal</InputLabel>
                <TextInput className="w-full" value={participant.user.profile?.country} readOnly />
              </div>

              <div>
                <InputLabel>Provinsi</InputLabel>
                <TextInput className="w-full" value={participant.user.profile?.province} readOnly />
              </div>

              <div>
                <InputLabel>Kabupaten / Kota</InputLabel>
                <TextInput className="w-full" value={participant.user.profile?.city} readOnly />
              </div>

              <div className="col-span-2">
                <InputLabel>Alamat Lengkap</InputLabel>
                <textarea
                  className="w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "
                  name="description" id="description" rows={3}
                  defaultValue={participant.user.profile?.address}
                  readOnly />
              </div>

              <hr />

              <div className="col-span-2">
                <h1>Data Registrasi</h1>
              </div>


              <div className="col-span-2 md:grid-cols-2">

                <div className="mb-2">
                  <UpdateCreationTitle item={participant?.creation} updateMode={updateMode} setUpdateMode={setUpdateMode} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <InputLabel>Kategori</InputLabel>
                    <TextInput className="w-full" value={participant.category?.category_name} readOnly />
                  </div>

                  <div>
                    <InputLabel>Bahasa</InputLabel>
                    <TextInput className="w-full" value={participant.language?.name} readOnly />
                  </div>

                  <div>
                    <InputLabel>Jenjang Pendidikan</InputLabel>
                    <TextInput className="w-full" value={participant.level_of_participant?.level_name} readOnly />
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <InputLabel>Bukti Pembayaran</InputLabel>
                <a className="justify-center" href={participant.payment_receipt_path} target="_blank" rel="noopener noreferrer">
                  <img className="w-1/2 rounded " src={participant.payment_receipt_path} alt={participant.payment_receipt_path} />
                  {participant.payment_receipt_path}
                </a>
              </div>

              <div>
                <InputLabel htmlFor="status_verifikasi" value="Status Verifikasi" />
                <div className="flex flex-row gap-4">
                  <label htmlFor="status_verifikasi-l">
                    <input type="radio" id="status_verifikasi-l" name="status_verifikasi" readOnly value={0} checked={participant.status_verifikasi == "0"} /> Belum Terverifikasi
                  </label>
                  <label htmlFor="status_verifikasi-p">
                    <input type="radio" id="status_verifikasi-p" name="status_verifikasi" readOnly value={1} checked={participant.status_verifikasi == "1"} /> Sudah Terverifikasi
                  </label>
                </div>
              </div>

            </div>

          </section>
        </div>
      </div>
    </AdminLayout>
  )
}

export default Detail