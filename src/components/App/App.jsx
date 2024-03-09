import axios from 'axios';
import { useEffect, useState } from 'react';
import GalleryList from '../GalleryList/GalleryList';

function App() {

  const fetchGallery = () => {
    axios({
      method: 'GET',
      url: '/api/gallery'
    })
    .then(
      response => {
        console.log ('Full response from server:', response);
        console.log ('Data array only in response from server:', response.data)
        setGalleryList(response.data);
      })
    .catch(
      error => {
        console.log('Error from the server', error);
      })
  };

  useEffect(
    fetchGallery, []
  );


  const [galleryList, setGalleryList] = useState ([]);

    return (
      <div data-testid='app'>
        <header>
          <h1>React Gallery</h1>
        </header>
        <ul> <GalleryList />
        </ul>
      </div>
    );
}

export default App;
