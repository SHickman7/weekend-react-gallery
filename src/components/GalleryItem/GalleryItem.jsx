import axios from 'axios';
import { useState } from 'react';
import './GalleryItem.css'

function GalleryItem({item, fetchGallery}) {
    
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

    const likeCounter = (event) => {
        axios({
            method: 'PUT',
            url: `api/gallery/like/${item.id}`
        }).then((response) => {
            fetchGallery();
        }).catch((error) =>{
            console.log ('PUT request failed', error)
        });
    }

    const showLikes = () => {
        if(item.likes === 0){
            return (<></>)
        } else if (item.likes === 1){
            return (<p> 1 person likes this</p>)
        } else {
            return(
                <p>{item.likes} people like this </p>
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
                    <br></br>
                    <button className='button_formatting' data-testid = "like" onClick={likeCounter} id={item.id}>LIKE</button>
                    <p className='likes_formatting'>{showLikes()}</p>
            </div>
        </>

    )
}

export default GalleryItem;