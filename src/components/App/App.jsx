import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList'
function App() {

  useEffect(()=> {
  // first step  Render Data on Page Load
    getGalleryList()
}, [])

const[galleryList, setGalleryList] = useState([])

// Ran on page Load...
const getGalleryList = ()=> {
    console.log('get triggered')
  //  finds get request in the server
    axios.get('/gallery').then(response => {
        // 6. save the data in the shoppingList state
        setGalleryList(response.data)
    }).catch(err => {
        console.error(err)
    })
} 

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <GalleryList />
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
