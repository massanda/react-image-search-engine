// Import Components
import ImageShow from "./ImageShow"
import "./ImageList.css"

function ImageList({images}) {

    const renderedImages = images.map((image) => {
        // We use the image.id as the Key for optimization!
        // React will look at the keys from the previous render to make the MINIMAL amount of changes to the DOM (based on the last render)
        return <ImageShow image={image} key={image.id} /> 
    })

    return (
        <div className="image-list">
            {renderedImages}
        </div>
    )
}

export default ImageList