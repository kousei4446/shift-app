import Head from '@/Pages/Home/Head';
import { useState } from 'react';
export default function Guest({ children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Head isOpen={isOpen} setIsOpen={setIsOpen} />
            <div style={{ width: "100%", height: "calc(90vh - 54px)", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                    {children}
                </div>
            </div>
        </>

    );
}
