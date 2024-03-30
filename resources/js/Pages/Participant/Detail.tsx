import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import AdminLayout from '@/Layouts/AdminLayout';
import { PageProps, Participant } from '@/types';
import { Head } from '@inertiajs/react';
import React from 'react'

type ParticipantDetailPageProps = {
  participant: Participant
};
function Detail({
  auth,
  participant,
}: PageProps<ParticipantDetailPageProps>) {

  console.log(participant)

  return (
    <AdminLayout
      roles={auth.roles}
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Detail Partisipan</h2>}>

      <Head title="Detail Partisipan" />

      <div className="py-2">
        <div className="w-full mx-auto sm:px-6 lg:px-8 space-y-6">
          <section className="p-4 sm:p-8 w-full bg-white shadow sm:rounded-lg">

            <div className="flex flex-row">
              <div className="my-2 mx-2">
                <InputLabel>Nama Peserta</InputLabel>
                {/* <TextInput value={participant.user.name} /> */}
              </div>
            </div>

          </section>
        </div>
      </div>
    </AdminLayout>
  )
}

export default Detail