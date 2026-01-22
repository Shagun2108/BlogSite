import React from 'react'
import { Container,PostCard } from '../components'
import service from '../Service/config'
import { useState } from 'react'
import { useEffect } from 'react'

const AllPost = () => {
    const [posts ,setPosts] =useState([]);

    useEffect(()=>{
        service.listPosts([]).then((posts)=>{
            if(posts){
                setPosts(posts.documents);
            }
        })

    },[])


  return (

    <div className=' w-fullpy-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard post={post}
                        />
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPost