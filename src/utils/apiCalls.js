export const fetchSpaceFacts = async () => {
  const url = 'https://hubblesite.org/api/v3/glossary?page=all';
  try {
    const response = await fetch(url);
    const fetchedFacts = await response.json();
    return fetchedFacts;
  } catch (error) {
    throw new Error(error.message);
  }
};
