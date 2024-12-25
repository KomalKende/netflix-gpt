import React from 'react'

const VideoTitle = ({title, overview}) => {

  return (
    <div className='w-screen aspect-video pt-[16%] px-28 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-5xl font-bold p-4'>{title}</h1>
      <p className='text-xl p-4 w-2/4'>{overview}</p>
      <div className='flex p-4'>
        <button className='bg-gray-200 text-black py-2 px-8 mr-4 rounded-md text-lg hover:bg-opacity-80'> ⯈ Play</button>
        <button className='bg-gray-500 text-black py-2 px-8 rounded-md text-white text-lg'> More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
