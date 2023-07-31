import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { PureComponent } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Loader } from "./Loader/Loader";
import { Button } from "./Button/Button";
import { getImages } from "services/getImages";

export class App extends PureComponent {
  state = {
    searchQuery: '',
    images: null,
    page: 1,
    loading: false,
    error: null
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
    const { images, loading, error } = this.state;

    const gallery = !error && images && <ImageGallery images={images} />;
    const btnLoadMore = !error && !loading && images && <Button text='Load more' onClick={this.loadMoreImages}/>
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
