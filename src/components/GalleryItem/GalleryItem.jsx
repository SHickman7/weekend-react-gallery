import axios from 'axios';
import { useState } from 'react';
import './GalleryItem.css'

function GalleryItem( {item} ){
    
    
    return(
        <>
            <div data-testid = 'galleryItem'>
                <img className = "gallery_item" src = {item.url} alt= {item.description} />     
                <p className='title_padding'>{item.title}</p>
            </div>
        </>

    )
}

export default GalleryItem;