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
            <div data-testid = 'galleryItem'>
                {displayDescription
                    ? <p className='description_formatting' data-testid='toggle' onClick={toggleDescription}>{item.description}</p>
                    : <img className='item_formatting' src = {item.url} alt={item.description} data-testid="toggle" onClick={() => toggleDescription()}/>}
                    <p className='title_formatting'>{item.title}</p>
            </div>
        </>

    )
}

export default GalleryItem;