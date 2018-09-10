export const fetchSpaceFacts = async () => {
  const response = await fetch(
    'http://hubblesite.org/api/v3/glossary?page=all'
  );
  const fetchedFacts = await response.json();
  return fetchedFacts;
};
