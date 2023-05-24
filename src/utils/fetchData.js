export const exerciseOptions = {
    method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'dcd5e453fcmshbe460ea8004487ep18ab02jsne41d2f65a914',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};


export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}