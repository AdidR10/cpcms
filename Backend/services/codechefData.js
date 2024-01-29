const axios = require('axios');

async function getCodechefData(id) {
  try {
    const response = await axios.get(`https://codechef-api.vercel.app/${id}`);
    const data = response.data;

    if (data.success) {
      return {
        profile: data.profile,
        name: data.name,
        currentRating: data.currentRating,
        highestRating: data.highestRating,
        countryFlag: data.countryFlag,
        countryName: data.countryName,
        globalRank: data.globalRank,
        countryRank: data.countryRank,
        stars: data.stars[0],
      };
    } else {
      throw new Error(data.error);
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
}
module.exports = getCodechefData;