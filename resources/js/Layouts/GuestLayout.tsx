import ApplicationLogo from '@/Components/ApplicationLogo';
import SponsorHeader from '@/Components/SponsorHeader';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div className="mt-8">
                <Link href="/">
                     <SponsorHeader />
                </Link>
            </div>
        <div className="w-full max-w-md md:max-w-2xl mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
