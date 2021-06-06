import {useState} from 'react';
import axios from 'axios';

function GalleryForm ({getGalleryList}) {

    const [titleInput, setTitleInput] = useState('');
    const [pathInput, setPathInput] = useState('');
    const [descriptionInput, setDescriptionInput] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();

        const newPost = {
            title : titleInput,
            path: pathInput,
            description: descriptionInput
        }

        axios.post('/gallery', newPost)
        .then(response => {
            getGalleryList()
            clearinput()
        }).catch(err=> {
            console.error(err)
        })
    }

    const clearinput = () => {
        setTitleInput('')
        setPathInput('')
        setDescriptionInput('')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    value={titleInput} 
                    onChange={(event) => setTitleInput(event.target.value)}
                    placeholder="Photo Title"
                    />
                <input 
                    value={pathInput} 
                    onChange={(event) => setPathInput(event.target.value)}
                    placeholder="Image URL"
                    />
                <input 
                    value={descriptionInput} 
                    onChange={(event) => setDescriptionInput(event.target.value)}
                    placeholder="description"
                    />
                <button type='submit'>Add Post!</button>
            </form>
        </>
    )
}

export default GalleryForm