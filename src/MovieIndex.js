import React from 'react';
import { MovieDisplay } from './MovieDisplay';

class MovieIndex extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }

  handleClick = () => {
    fetch("https://ghibliapi.herokuapp.com/films")
    .then(response => {

      return response.json()
    })
    .then(res => {

      this.setState({ movies: res })
    })
  }

  render() {
    let movies = this.state.movies.map(movie => {
      return <MovieDisplay title={movie.title}
      description={movie.description} />
    })
    return (
      <>
        <button onClick={this.handleClick}>Click 4 Movies!</button>
        {movies}
      </>
    )
  }
}

export default MovieIndex;
