import { useState } from 'react';
import axios from 'axios';

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