
import { useState } from 'react';
import axios from 'axios'
import './GalleryItem.css'
// accessing the src of each photo
function GalleryItem({path, picture, getGalleryList}) {

    const[showDescription, setShowDescription] = useState(false)

    const handleLike = () => {
        console.log(picture.likes)
  
        axios.put(`gallery/like/${picture.id}`)
            
        .then(response => {

            console.log(response);
            // 19. Trigger GET from props, flow change, go to 2
            getGalleryList();
        }).catch(err => {
            console.log('Ahhhh', err)
        })
    }

console.log(showDescription)
    return (
        // Each gallery Item
        <div className="pictureContainer">
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
            <button  onClick={handleLike}>like: {picture.likes}</button>
            </div>
    );
};
export default GalleryItem;