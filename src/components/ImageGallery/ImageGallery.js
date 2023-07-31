import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { ImageGalleryList } from "./ImageGallery.styled"
import { PureComponent } from "react";

export class ImageGallery extends PureComponent {
    render() {
        const {images} = this.props;
        return (
            <ImageGalleryList>
                {
                    images.map(image => <ImageGalleryItem key={image.id} image={image} />)
                }
            </ImageGalleryList>
        )
    }
}