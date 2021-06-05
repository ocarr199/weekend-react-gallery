import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList'
function App() {

  useEffect(()=> {
  // 1. first step  Render Data on Page Load
    getGalleryList()
}, [])
// 6. GalleryList now contains data from router, state has changed
const[galleryList, setGalleryList] = useState([])

// Ran on page Load...
const getGalleryList = ()=> {
    console.log('get triggered')
  //  2. finds get request in the server
    axios.get('/gallery').then(response => {
        // 5. save the data in the galleryList state
        setGalleryList(response.data)
    }).catch(err => {
        console.error(err)
    })
} 
//7. State changed, rerender
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        {/* 8. GalleryList recieves data through props */}
        <GalleryList gallery={galleryList} getGalleryList={getGalleryList} />
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
