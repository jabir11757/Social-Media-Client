import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const { register, handleSubmit } = useForm();

    const imgHostKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate();



    const handleAddPost = (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url)
                    navigate('/media')

                    const posts = {
                        post: data.post,
                        image: imgData.data.url
                    }

                    fetch('http://localhost:5000/posts', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(posts)
                    })
                }
            })

    }
    return (
        <div className='w-full p-7'>
            <h2 className='text-3xl'> Add Post</h2>
            <form onSubmit={handleSubmit(handleAddPost)}>
                <div className="form-control w-1/2 mt-2">
                    <textarea type="text" placeholder="What's on your mind ?" {...register("post")} className="textarea textarea-bordered h-36" />
                </div>
                <div className="form-control w-1/2 mt-2">
                    <input type="file" {...register("image", {
                    })} className="" />
                </div>
                <input className='btn btn-primary mt-5 w-1/2' value='Add Post' type='submit' />
            </form>
        </div>
    );
};

export default Home;