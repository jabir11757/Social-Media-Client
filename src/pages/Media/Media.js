import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Posts from './Posts';


const Media = () => {

    const { data: posts = [], isLoading } = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/posts');
            const data = await res.json();
            return data;
        }
    })



    return (
        <div className="shadow-2xl w-1/2 mx-auto my-6">
            <div className="flex justify-center  ">
                <div className='grid grid-cols-1 gap-6'>
                    {
                        posts.map(post => <Posts key={post.Id} post={post} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Media;