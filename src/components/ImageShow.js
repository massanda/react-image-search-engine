import "./ImageShow.css"

function ImageShow({ image }) {
    return (
        <div className="image-show">
            <img className="image" alt={image.alt_description} src={image.urls.regular} />
        </div>
    )
}

export default ImageShow