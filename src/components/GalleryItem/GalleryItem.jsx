
import { useState } from 'react';
import axios from 'axios'
import './GalleryItem.css'
// accessing the src of each photo
function GalleryItem({path, picture, getGalleryList, galleryList}) {

    const[showDescription, setShowDescription] = useState(false)

    const handleLike = () => {
        console.log(picture.likes)
        console.log('galleryList is in the put', galleryList)
        axios.put(`gallery/like/${picture.id}`, galleryList)
        .then(response => {
            console.log(response);
            // 19. Trigger GET from props, flow change, go to 2
            getGalleryList();
        }).catch(err => {
            console.log('Ahhhh', err)
        })
    }

    const handleDelete = () => {
        console.log(picture);
        axios.delete(`/gallery/${picture.id}`)
        .then(response => {
            console.log(response);
            getGalleryList();
        }).catch(err => {
            console.log(err)
        })
    }

console.log(showDescription)
    return (
        // Each gallery Item
        <div className="pictureContainer">
            <h3>{picture.title}</h3>
             {picture.likes == 1 ? (
               <p>{picture.likes} Like</p>
            ) : (
                <p>{picture.likes} Likes</p>
            )}
            {showDescription ? (
                <div className="content description">
                    <p onClick={() => setShowDescription(!showDescription)}>{picture.description}</p>
                </div>
            ) : (
                <div className="content">
    {console.log(path)}
                {/* using path as image source to get each photo */}
                <img src={path} alt="" onClick={() => setShowDescription(!showDescription)} />
                
                </div>
            )}
            <button  onClick={handleLike}>like </button><button  onClick={handleDelete}>Delete </button>
            </div>
    );
};
export default GalleryItem;