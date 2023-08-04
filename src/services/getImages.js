export const getImages = async (searchQuery, page) => {
    const API_KEY = '38136420-cef344aec407ce1d86600f9a2';

    return await fetch(`https://pixabay.com/api/?q=${searchQuery}}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
      .then(res => res.json());
}