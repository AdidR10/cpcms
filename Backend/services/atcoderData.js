// url:https://atcoder.jp/users/adibur6
// Data: Birth Year selector : #main-container > div.row > div.col-md-3.col-sm-12 > table > tbody > tr:nth-child(2) > td
// Data: Country selector :#main-container > div.row > div.col-md-3.col-sm-12 > table > tbody > tr:nth-child(1) > td
// Data: Rank selector :#main-container > div.row > div.col-md-3.col-sm-12 > table > tbody > tr:nth-child(3) > td
// Data: Rating selector :#main-container > div.row > div.col-md-3.col-sm-12 > table > tbody > tr:nth-child(4) > td
// Data: Highest Rating selector :#main-container > div.row > div.col-md-3.col-sm-12 > table > tbody > tr:nth-child(5) > td
// Data: Rated Matches selector :#main-container > div.row > div.col-md-3.col-sm-12 > table > tbody > tr:nth-child(8) > td
const axios = require('axios');
const cheerio = require('cheerio');

async function getAtcoderData(id) {
    const url = `https://atcoder.jp/users/${id}`;

    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);

        const userData = {
            birthYear: $(`#main-container > div.row > div.col-md-3.col-sm-12 > table > tbody > tr:nth-child(2) > td`).text(),
            country: $(`#main-container > div.row > div.col-md-3.col-sm-12 > table > tbody > tr:nth-child(1) > td`).text(),
            rank: $(`#main-container > div.row > div.col-md-9.col-sm-12 > table > tbody > tr:nth-child(1) > td`).text(),
            rating: $(`#main-container > div.row > div.col-md-9.col-sm-12 > table > tbody > tr:nth-child(2) > td > span.user-green`).text(),
            highestRating: $(`#main-container > div.row > div.col-md-9.col-sm-12 > table > tbody > tr:nth-child(3) > td > span.user-green`).text(),
            ratedMatches: $(`#main-container > div.row > div.col-md-9.col-sm-12 > table > tbody > tr:nth-child(4) > td`).text()
        };

        return userData;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

module.exports = getAtcoderData;
