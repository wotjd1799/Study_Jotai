export const fetchData = async () => {
  const response = (await fetch(
    "https://dev-cubelms-api.crscube.io/health"
  ).then((response) => response.json())).data.message;
  
  return response;
};