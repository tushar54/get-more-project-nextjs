import Link from 'next/link';
import React from 'react';
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <nav className="flex justify-between items-center h-[100px] px-6">
      <h1 className="text-2xl font-bold">Get More</h1>
      <ul className="font-bold flex space-x-6 items-center">
        <Link href="/" className='border-2 rounded-md px-2 py-1'>Home</Link>
        {user ? (
          <Link href="/profile" className='border-2 rounded-md px-2 py-1'>Profile</Link> // Profile link if authenticated
        ) : (
          <LoginLink className='border-2 rounded-md px-2 py-1'>Profile</LoginLink> // Redirect to login if unauthenticated
        )}
        {user ? (
          <div className="flex items-center space-x-4">
            <LogoutLink className='border-2 rounded-md px-2 py-1'>Log out</LogoutLink>
            <h1>{user.given_name}</h1>
          </div>
        ) : (
          <LoginLink className='border-2 rounded-md px-2 py-1'>Sign in</LoginLink>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
