
import { useState } from 'react';
import axios from 'axios'
import './GalleryItem.css'
import Button from "@material-ui/core/Button"
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

// accessing the src of each photo
function GalleryItem({ path, picture, getGalleryList, galleryList }) {

    const [showDescription, setShowDescription] = useState(false)

    const handleLike = () => {
        axios.put(`gallery/like/${picture.id}`, galleryList)
            .then(response => {
                // log successful status code
                console.log(response);
                // 19. Trigger GET from props, flow change, go to 2
                getGalleryList();
            }).catch(err => {
                console.log('Ahhhh', err)
            })
    }

    const handleDelete = () => {
        axios.delete(`/gallery/${picture.id}`)
            .then(response => {
                console.log(response);
                getGalleryList();
            }).catch(err => {
                console.log(err)
            })
    }
    return (
        // Each gallery Item
        <div className="pictureContainer">
            <h3>{picture.title}</h3>
            {picture.likes == 1 ? (
                <p >{picture.likes} Like</p>
            ) : (
                <p>{picture.likes} Likes</p>
            )}
            {showDescription ? (
                <div className="content description">
                    <p onClick={() => setShowDescription(!showDescription)}>{picture.description}</p>
                </div>
            ) : (
                <div className="content">
                    {/* using path as image source to get each photo */}
                    <img src={path} alt="" onClick={() => setShowDescription(!showDescription)} />

                </div>
            )}
            <br />
            <Button variant="contained" color="primary" onClick={handleLike}>LIKE</Button>  <IconButton aria-label="delete" onClick={handleDelete}>
  <DeleteIcon />
</IconButton>
        </div>
    );
};
export default GalleryItem;