const axios = require('axios');

async function getCodeforcesData(id) {
    try {
        const response = await axios.get(`https://codeforces.com/api/user.info?handles=${id}&checkHistoricHandles=false`);
        const data = response.data;

        if (data.status === 'OK') {
            const user = data.result[0];
            return {
                lastName: user.lastName,
                lastOnlineTimeSeconds: user.lastOnlineTimeSeconds,
                rating: user.rating,
                friendOfCount: user.friendOfCount,
                titlePhoto: user.titlePhoto,
                handle: user.handle,
                avatar: user.avatar,
                firstName: user.firstName,
                contribution: user.contribution,
                organization: user.organization,
                rank: user.rank,
                maxRating: user.maxRating,
                registrationTimeSeconds: user.registrationTimeSeconds,
                maxRank: user.maxRank,
            };
        } else {
            throw new Error(data.comment);
        }
    } catch (err) {
        console.error("Codeforces API error: ");
        throw err;
    }
}

module.exports = getCodeforcesData;
