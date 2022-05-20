//create an array to store movies
const movies = [];

//render added movies - filter movies
const renderMovies = (filter = '') => {
  const movieList = document.getElementById('movie-list');

  if (movies.length === 0) {
    movieList.classList.remove('visible');
    return;
  } else {
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';

  const filteredMovies = !filter ? movies : movies.filter(movie => movie.info.title.includes(filter));

  //create list element to write movies in.
  filteredMovies.forEach((movie) => {
    const movieEl = document.createElement('li');
    const { info, ...otherProps } = movie;
    console.log(otherProps);

    //let text = info.title + ' - ';

    let { getFormattedTitle } = movie;

    let text = getFormattedTitle.apply(movie) + ' - ';
    for (const key in info) {
      //underscore (_) shouldn't be accessed from outside the object.
      if (key !== 'title' && key !== '_title') {
        text = text + `${key}: ${info[key]}`;
      };
    };
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

//add movie when click the add movie button
const movieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if (
    extraName.trim() === '' ||
    extraValue.trim() === ''
  ) {
    return;
  }
  const newMovie = {
    info: {
      set title(val) {
        if (val.trim() === '') {
          //_ internal value 
          this._title = 'DEFAULT';
          return;
        }
        this._title = val;
      },
      get title() {
        return this._title;
      },

      [extraName]: extraValue,
    },
    id: Math.random().toString(),
    //get method that returns title with uppercase
    getFormattedTitle() {
      console.log(this);
      return this.info.title.toUpperCase();
    }
  }
  newMovie.info.title = title;
  movies.push(newMovie);
  renderMovies();
  console.log(movies);

}

const searchMovieHandler = () => {
  const filterTerm = document.getElementById('filter-title').value;
  renderMovies(filterTerm);
}


//setting buttons
const addMovieBtn = document.getElementById('add-movie-btn');
const searchMovieBtn = document.getElementById('search-btn');


addMovieBtn.addEventListener('click', movieHandler);
searchMovieBtn.addEventListener('click', searchMovieHandler);