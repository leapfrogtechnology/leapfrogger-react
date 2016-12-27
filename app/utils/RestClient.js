exports.get = async function(url, apiKey = ''){
  try {
    let response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'ApiKey': apiKey
      }
      });
    return await response.json();
  } catch(error) {
    throw error;
  }
}