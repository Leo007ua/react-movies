import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';
import ContainerStyled from './MovDetailsStyled';

const MovDetails = ({ movieDetails }) => {
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from);

  return (
    <>
      <Link to={backLinkRef.current || '/'}>Go Back</Link>

      <ContainerStyled>
        <img
          src={`https://image.tmdb.org/t/p/w400${movieDetails.poster_path}`}
          alt={`${movieDetails.title}`}
        />
      </ContainerStyled>
      <>
        <h1>{movieDetails.title}</h1>
        <p>User score: {Math.round(movieDetails.vote_average *10)}%</p>
        <p>Release Date: {movieDetails.release_date}</p>
        <h3>Overview:</h3>
        <p>{movieDetails.overview}</p>
        <p>Genre:</p>
        <span>{movieDetails.genres.map(genre => genre.name).join(', ')}</span>
      </>
    </>
  );
};

MovDetails.propTypes = {
    movieDetails: PropTypes.object.isRequired,
};

export default MovDetails;
