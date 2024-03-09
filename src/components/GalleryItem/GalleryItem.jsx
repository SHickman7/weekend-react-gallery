import axios from 'axios';
import { useState } from 'react';
import './GalleryItem.css'

function GalleryItem( {item} ){
    
    const [displayDescription, setDisplayDescription] = useState(false);

    //Function to determine whether description is displayed or not
    const toggleDescription = () => {
        setDisplayDescription(!displayDescription);
    }


    const imageDisplayed = () => {

        if (displayDescription){
            return (
                <>
                    <div data-testid="description">{item.description}</div>
                </>
            )
        } else {
            return (
                <>
                    <img srce = {item.url}>/</img>
                </>
            )
        }
    }
    return(
        <>
            <div data-testid = 'galleryItem' className='gallery_item'>
                {displayDescription
                    ? <p data-testid='toggle' onClick={toggleDescription}>{item.description}</p>
                    : <img src = {item.url} alt={item.description} data-testid="toggle" onClick={() => toggleDescription()}/>}
            </div>
        </>

    )
}

export default GalleryItem;