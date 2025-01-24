import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className="text-center h-[150px] flex flex-col justify-center items-center mt-5">
            <ul className="font-bold space-x-3 ">
                <Link href={'/'}>Home</Link>
                <Link href={'about'}>About</Link>
                <Link href={''}>Contact</Link>
            </ul>
            <h1>contact:01303078081</h1>
        </footer>
    );
};

export default Footer;