export const fetchSpaceFacts = async () => {
  const url =
    'https://cors-anywhere.herokuapp.com/http://hubblesite.org/api/v3/glossary?page=all';
  try {
    const response = await fetch(url);
    const fetchedFacts = await response.json();
    return fetchedFacts;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchPicsOfDay = async () => {
  const url =
    'https://api.nasa.gov/planetary/apod?api_key=nLdGXgll7kvRQaMpzlmlCLyF1ivnLs94ygOmbVvp&start_date=2018-12-01&end_date=2018-12-03';
  try {
    const response = await fetch(url);
    const fetchedPic = await response.json();
    return fetchedPic;
  } catch (error) {
    throw new Error(error.message);
  }
};
