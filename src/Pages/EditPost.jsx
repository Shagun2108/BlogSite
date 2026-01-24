import React from 'react'
import service from '../Service/config'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import { Container, PostForm } from '../components'

const EditPost = () => {
    const [post,setPosts]=useState(null);
    const {slug} =useParams();
    const navigate =useNavigate();

    useEffect(()=>{
        if(slug){
            AppwriteException.getPost(slug).then((post)=>{
                if(post){
                    setPosts(post);
                }
            })
        }else{
            navigate('/');
        }
    },[slug,navigate])

    return post?(<div className='py-8'>
        <Container>
            <PostForm post={post}/>
        </Container>
    </div>):null;
 
}

export default EditPost