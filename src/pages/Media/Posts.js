import React from 'react';
import { Link } from 'react-router-dom';
import user from '../../images/user.png'

const Posts = ({ post }) => {
    const { _id, post: uPost, image } = post;
    return (
        <div className='bg-slate-100'>
            <div className='flex'>
                <label className="btn btn-ghost btn-circle avatar">
                    <div className="w-7 rounded-full">
                        <img src={user} alt='' />
                    </div>
                </label>
                <h2 className="mt-2 font-bold">EndGame User</h2>
            </div>
            <p className='text-center w-3/4'>{uPost}</p>
            <figure><img className='p-6' src={image} alt="" /></figure>
            <div className='flex justify-end'>
                <button className='btn btn-primary btn-outline m-2'><Link to={`/media/${_id}`}>details</Link></button>
            </div>
        </div>
    );
};

export default Posts;