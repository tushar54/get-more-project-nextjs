
import getpost from '@/lib/getpost';
import React from 'react';

async function details({ params }) {
    const { id } = await params;
    const post=await getpost(id)
  
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
}

export default details;