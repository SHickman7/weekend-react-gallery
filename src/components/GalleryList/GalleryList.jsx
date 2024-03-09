import axios from 'axios';
import { useState, useEffect } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css';



function GalleryList(){

    const [galleryArray, setGalleryArray] = useState ([]);

    const fetchGallery = () => {
        axios({
            method: 'GET',
            url: 'api/gallery/'
        }).then(response => {
            setGalleryArray(response.data);
        }).catch(error => {
            console.log('Error fetching gallery', error);
        });
    }

    useEffect(fetchGallery, []);

    return (
        <>
        <div className='image_row' data-testid="galleryList">
            {galleryArray.map(item => <GalleryItem key={item.id} item={item} fetchGallery={fetchGallery} />)}
         </div>
        </>
    )

}


export default GalleryList;