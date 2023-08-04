import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useRef, useState } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Loader } from "./Loader/Loader";
import { Button } from "./Button/Button";
import { getImages } from "services/getImages";

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalImages, setTotalImages] = useState(null);
  const prevQuery = useRef('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!searchQuery.trim()) {
      toast.info("Enter search query!");
      return;
    }

    if (searchQuery === prevQuery.current) {
      toast.error('Enter new query!');
      return;
    }

    setPage(1);
    setLoading(true);
    setError(null);

    getImages(searchQuery, page)
      .then(images => {

        if (!images.hits.length) {
          setImages([]);
          toast(`Sorry, no data for query ${searchQuery}`);
          return;
        }

        setImages(images.hits.length ? images.hits : []);
        setPage(prevPage => prevPage + 1);
        setTotalImages(images.totalHits);
        prevQuery.current = searchQuery;
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }

  const handleInput = (e) => {
    setSearchQuery(e.target.value);
  }

  const loadMoreImages = () => {
    setLoading(true);
    setError(null);

    getImages(searchQuery, page)
      .then(images => {
        setImages(prevImages => [...prevImages, ...images.hits]);
        setPage(prevPage => prevPage + 1);
        setLoading(false);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }

  const gallery = !error && images && <ImageGallery images={images} />;
  const btnLoadMore = ((page - 1) < (totalImages / 12)) && !error && !loading && (images.length > 0) && <Button text='Load more' onClick={loadMoreImages}/>
  const errorMessage = error ? 'Oops, something wrong...' : null;

  return (
    <div>
      <Searchbar onSubmit={handleSubmit} handleInput={handleInput} />
      {errorMessage}
      {gallery}
      {btnLoadMore}
      {loading && <Loader />}
      <ToastContainer />
    </div>
  )
};
