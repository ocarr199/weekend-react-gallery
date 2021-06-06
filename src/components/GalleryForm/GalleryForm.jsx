import { useState } from 'react';
import axios from 'axios';
import IconButton from '@material-ui/core/IconButton';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import TextField from '@material-ui/core/TextField';

function GalleryForm({ getGalleryList }) {

    const [titleInput, setTitleInput] = useState('');
    const [pathInput, setPathInput] = useState('');
    const [descriptionInput, setDescriptionInput] = useState('');

    // on click of post button run function
    const handleSubmit = (event) => {
        event.preventDefault();
        // object to post
        const newPost = {
            title: titleInput,
            path: pathInput,
            description: descriptionInput
        }
        // all fields must be filled to post
        if (titleInput == '' || pathInput == '' || descriptionInput == '') {
            alert('Please complete all input fields')
        } else {
            // post newPost
            axios.post('/gallery', newPost)
                .then(response => {
                    // run GET to re render dom
                    getGalleryList()
                    // clear input fields
                    clearinput()
                }).catch(err => {
                    console.error(err)
                })
        }
    }
    // clear input fields
    const clearinput = () => {
        setTitleInput('')
        setPathInput('')
        setDescriptionInput('')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                {/* inputs to create newPost object with */}
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    value={titleInput}
                    onChange={(event) => setTitleInput(event.target.value)}
                    placeholder="Photo Title"
                />
                <TextField
                 id="outlined-basic"
                 variant="outlined"
                    value={pathInput}
                    onChange={(event) => setPathInput(event.target.value)}
                    placeholder="Image URL"
                />
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    value={descriptionInput}
                    onChange={(event) => setDescriptionInput(event.target.value)}
                    placeholder="description"
                />
                <IconButton type='submit' aria-label="upload">
                <CloudUploadIcon />
                </IconButton>
            </form>
        </>
    )
}

export default GalleryForm