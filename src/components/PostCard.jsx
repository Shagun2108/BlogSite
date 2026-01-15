import React from 'react'
import service from '../Service/config'
import { Link } from 'react-router-dom'

// can we used store to get service


const PostCard = ({$id,title,featuredImage}) => {
  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full bg-gray-100 rounded-xl p-4'>

        <div className='w-full justify-center mb-4'>
          <div>
            <img src={service.getFilePreview(featuredImage)} alt={title} className='w-full h-48 object-cover rounded-lg' />
          </div>
          <h2 className='text-2xl font-bold'> {title}</h2>
        </div>
      </div>
    </Link>
  )
}

export default PostCard