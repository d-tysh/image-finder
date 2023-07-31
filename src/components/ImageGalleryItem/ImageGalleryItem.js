import * as basicLightbox from 'basiclightbox'

import { ListItem } from "./ImageGalleryItem.styled"

export const ImageGalleryItem = ({ image }) => {

    const instance = basicLightbox.create(`
	    <img src=${image.largeImageURL} alt=${image.tags} />
    `)

    const handleClick = () => {
        instance.show();
        window.addEventListener('keydown', closeModal);
    }

    const closeModal = (e) => {
        if (e.key !== 'Escape') {
            return;
        }
        window.removeEventListener('keydown', closeModal);
        instance.close();
    }

    return (
        <ListItem onClick={handleClick}>
            <img src={image.webformatURL} alt={image.tags} />
        </ListItem>
    )
}