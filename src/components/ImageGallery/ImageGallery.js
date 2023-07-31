import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { ImageGalleryList } from "./ImageGallery.styled"

export const ImageGallery = (props) => {
    return (
        <ImageGalleryList>
            {
                props.images.map(image => <ImageGalleryItem key={image.id} image={image} />)
            }
        </ImageGalleryList>
    )
}