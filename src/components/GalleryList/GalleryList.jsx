// import GalleryItem from GalleryItem component
import GalleryItem from '../GalleryItem/GalleryItem'
//9.  bringing in GalleryList variable and getGalleryList function 
// from App.jsx through props
function GalleryList({ galleryList, getGalleryList }) {

    return (

        <div>
            {/* div to render in App.jsx */}
            {/* loop through galleryList */}
            {galleryList.map(picture => {
                return (
                    <GalleryItem key={picture.id} path={picture.path} picture={picture} getGalleryList={getGalleryList} galleryList={galleryList} />
                )
            })}
        </div>
    )
};

export default GalleryList;