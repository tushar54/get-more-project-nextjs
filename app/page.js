import getAllPost from '@/lib/getAllpost';
import Link from 'next/link';
import React from 'react';

const Page = async () => {
  const data = await getAllPost();


  return (
    <div className="pl-10 text-3xl grid lg:grid-cols-4 md:grid-cols-3 gap-4 justify-center items-center rounded-md ">
      {data.map((item) => (
        <div key={item.id} className=' flex flex-col justify-between items-center border-2 w-[300px] h-[200px] text-center'>
          <h1>{item.title}</h1>
          <Link href={`/${item.id}`}>
            <button className="text-blue-500 underline">Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Page;
