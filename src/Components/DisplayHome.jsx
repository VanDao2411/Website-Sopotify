// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './Navbar'
import { albumsData } from '../assets/assets'
import AlbumItem from './Ablumitem'
import { songsData } from '../assets/assets'
import SongItem from './SongItem'

function DisplayHome() {
  return (
    <>
       <Navbar />
       <div className="my-4">
        <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
        <div className='flex overflow-auto'>
            {albumsData.map((item,index)=>(<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
        </div>
       </div>
       <div className="my-4">
        <h1 className='my-5 font-bold text-2xl'>Today is biggest hits</h1>
        <div className='flex overflow-auto'>
            {songsData.map((item,index)=>(<SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
        </div>
       </div>
    </>
  )
}

export default DisplayHome