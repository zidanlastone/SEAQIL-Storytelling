import React from 'react'

function SponsorHeader() {
    return (
        <div className="flex flex-row mx-auto w-5/6 text-center justify-center gap-x-2 my-4">
            <div className="md:h-16 w-16 p-1 m-1">
                <img className="object-cover" src="/image/sponsors/tutwuri-handayani.png" alt="tutwurihandayani" />
            </div>
            <div className="md:h-16 w-40 p-1 m-1">
                <img className="object-contain" src="/image/sponsors/upi-fix.png" alt="upi" />
            </div>
            <div className="md:h-16 w-16 p-1 m-1">
                <img className="object-cover" src="/image/sponsors/seameo.png" alt="seameo" />
            </div>
            <div className="md:h-20 w-20 p-1 m-1">
                <img className="object-cover" src="/image/sponsors/qitep.png" alt="qitep" />
            </div>
            <div className="md:h-16 w-16 p-1 m-1">
                <img className="object-cover" src="/image/sponsors/ceccep.png" alt="ceccep" />
            </div>
            <div className="md:h-10 w-28 p-1 m-1">
                <img className="object-cover" src="/image/sponsors/kpba-logo.png" alt="kpba" />
            </div>
            <div className="md:h-16 w-16 p-1 m-1">
                <img className="object-cover" src="/image/sponsors/hiski.png" alt="hiski" />
            </div>
            <div className="md:h-16 w-16 p-1 m-1">
                <img className="object-cover" src="/image/sponsors/tridaya-group.png" alt="tridaya" />
            </div>
        </div>
    )
}

export default SponsorHeader