import axios from 'axios';
import { useEffect, useState } from 'react';


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
      <div>
        <header>
          <h1>React Gallery</h1>
        </header>

        <p>The gallery goes here!</p>
        <ul>
          {galleryList.map(gallery =>(
            <li key={gallery.id}>{gallery.url}</li>
          ))}
        </ul>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
