import React from 'react';
import { useLoaderData } from 'react-router-dom';
import user from '../../images/user.png'

const Post = () => {
    const userPosts = useLoaderData();
    const { _id, post, image } = userPosts;

    return (
        <div className='grid grid-cols-2'>
            <div className='flex justify-center'>
                <div className='bg-slate-100 w-1/2'>
                    <div className='flex'>
                        <label className="btn btn-ghost btn-circle avatar">
                            <div className="w-7 rounded-full">
                                <img src={user} alt='' />
                            </div>
                        </label>
                        <h2 className="mt-2 font-bold">EndGame User</h2>
                    </div>
                    <p className='text-center w-3/4'>{post}</p>
                    <figure><img className='p-6 h-56 w-full' src={image} alt="" /></figure>
                </div>
            </div>
            <div>
                <h1 className='font-bold'>Active User</h1>

                <div>
                    <h1><small>Rahim</small></h1>
                    <h1><small>Karim</small></h1>
                    <h1><small>Jodu</small></h1>
                    <h1><small>Modhu</small></h1>
                    <h1><small>Hannan</small></h1>
                    <h1><small>Kannan</small></h1>
                </div>
            </div>
        </div>
    );
};

export default Post;