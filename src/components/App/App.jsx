import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList'
import GalleryForm from '../GalleryForm/GalleryForm'
function App() {

  useEffect(() => {
    // Render Data on Page Load
    getGalleryList()
  }, [])
  //  GalleryList now contains data from router, state has changed
  const [galleryList, setGalleryList] = useState([])

  // retrieve data from database
  const getGalleryList = () => {
    //  finds get request from router
    axios.get('/gallery')
      .then(response => {
        // setting galleryList variable to response.data
        setGalleryList(response.data)
      }).catch(err => {
        // if failed log error
        console.error("failed", err)
      })
  }
  // render when states change
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      {/* Renders input fields & post button */}
      <GalleryForm getGalleryList={getGalleryList} />
      {/* renders posts */}
      <GalleryList galleryList={galleryList} getGalleryList={getGalleryList} />
    </div>
  );
}

export default App;
