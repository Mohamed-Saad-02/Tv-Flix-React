const KEY_MOVIE = "50b0f78835667eb7da766dff89048445";

export async function getListMovie() {
  const res = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${KEY_MOVIE}`
  );
  const data = await res.json();

  return data;
}

export async function getMovieDiscover(genreId = "", page = 1, lg = "en") {
  const res = await fetch(`
  https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&${
    genreId && `with_genres=${genreId}`
  }&with_original_language=${lg}&api_key=${KEY_MOVIE}
  `);
  const data = await res.json();

  return data;
}

export async function getMovieUpcoming() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${KEY_MOVIE}`
  );
  const data = await res.json();

  return data;
}

export async function getMovieTrending() {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${KEY_MOVIE}`
  );
  const data = await res.json();

  return data;
}

export async function getMovieTopRated() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${KEY_MOVIE}`
  );
  const data = await res.json();

  return data;
}

export async function getMovieDetail(id) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY_MOVIE}`
  );
  const data = await res.json();

  return data;
}

export async function getMovieCredits(id) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY_MOVIE}`
  );
  const data = await res.json();

  return data;
}

export async function getMovieVideos(id) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${KEY_MOVIE}`
  );
  const data = await res.json();

  return data;
}

export async function getMoviesRecommend(id) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${KEY_MOVIE}`
  );
  const data = await res.json();
  return data;
}

export async function getMoviesBySearch(query) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${KEY_MOVIE}&query=${query}`
  );
  const data = await res.json();
  return data;
}
