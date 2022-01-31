import React, {  } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs'


import GifGridItem from './GifGridItem'

export default function GifGrid({category}) {

const {data,loading} = useFetchGifs(category);

  

    return (
        <>
                   <h3 className='animate__rubberBand'>{category}</h3>

{loading && <p>Loading...</p>}


 <div className="CardGrid ">
  

       { data.map((img, index) => 
         <GifGridItem 
         key={img.id}
          {...img} />
        )}
</div> 

        </>
    )
}
