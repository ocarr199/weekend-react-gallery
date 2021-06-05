import './GalleryItem.css'
// accessing the src of each photo
function GalleryItem({path}) {

  

    return (
        // Each gallery Item
        <div>
        {console.log(path)}
           <p>gallery item</p>
           {/* using path as image source to get each photo */}
           <img src={path} alt="" />
        </div>

    );
};
export default GalleryItem;