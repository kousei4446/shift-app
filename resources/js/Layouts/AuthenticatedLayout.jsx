import { useState } from 'react';
import Head from '@/Pages/Home/Head';
import Sidevar from '@/Pages/Home/Sidevar';

export default function Authenticated({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="min-h-screen bg-gray-100">
            <Head isOpen={isOpen} setIsOpen={setIsOpen} />
            {isOpen && <Sidevar setIsOpen={setIsOpen} />}

            <main>{children}</main>
        </div>
    );
}
