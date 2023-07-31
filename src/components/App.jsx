import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Loader } from "./Loader/Loader";
import { Button } from "./Button/Button";
import { getImages } from "services/getImages";

export class App extends Component {
  state = {
    searchQuery: '',
    images: null,
    page: 1,
    loading: false,
    error: null,
    totalImages: null
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { searchQuery, page } = this.state;

    if (!searchQuery.trim()) {
      toast.info("Enter search query!");
      return;
    }

    this.setState({ page: 1, loading: true, error: null })

    getImages(searchQuery, page)
      .then(images => {
        this.setState({
          images: images.hits.length ? images.hits : [],
          page: this.state.page + 1,
          totalImages: images.totalHits
        })
      })
      .catch(() => this.setState({error: true}))
      .finally(() => this.setState({loading: false}))
  }

  handleInput = (e) => {
    this.setState({ searchQuery: e.target.value })
  }

  loadMoreImages = () => {
    const { searchQuery, page } = this.state;

    this.setState({loading: true, error: null})

    console.log(this.state.totalImages);

    getImages(searchQuery, page)
      .then(images => {
        this.setState(prevState => {
          return {
            images: [...prevState.images, ...images.hits],
            page: prevState.page + 1,
            loading: false
          }
        })
      })
      .catch(() => this.setState({error: true}))
      .finally(() => this.setState({loading: false}))
  }

  render() {
    const { images, loading, error, page, totalImages } = this.state;

    const gallery = !error && images && <ImageGallery images={images} />;
    const btnLoadMore = ((page - 1) < (totalImages / 12)) && !error && !loading && images && <Button text='Load more' onClick={this.loadMoreImages}/>
    const errorMessage = error ? 'Oops, something wrong...' : null;

    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} handleInput={this.handleInput} />
        {errorMessage}
        {gallery}
        {btnLoadMore}
        {loading && <Loader />}
        <ToastContainer />
      </div>
    )
  }
};
