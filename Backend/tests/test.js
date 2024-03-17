const getCodeforcesData = require('../services/codeforcesData');
const getCodechefData = require('../services/codechefData');
const getAtcoderData = require('../services/atcoderData');

// write an approveUserRequest function here that will update the user request's status to approved
//first it will find the user request by id
// it will call 3 functions such as atocoder, codechef, codeforces from paths like services\codeforcesData.js
// then it will create a new user with the data from the user request and the data from the 3 functions
// then it will delete the user request
async function approveUserRequest() {
    const codeforcesData = await getCodeforcesData("adibur6");
    const codechefData = await getCodechefData("adibur6");
    const atcoderData = await getAtcoderData("adibur6");
    console.log(codechefData);
    console.log(atcoderData);
    console.log(codeforcesData);

    // Rest of the code to update user request status, create new user, and delete user request
}

approveUserRequest();