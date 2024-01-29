## Users

### Get all users
- Method: GET
- Path: /api/v1/users


### Get a user
- Method: GET
- Path: /api/v1/users/:userId
- Body: {
    "name": string,
    "universityId": string,
    "email": string,
    "gender": string,
    "codeforces": {
        "handle": string,
        "data": {
            "lastName": string,
            "lastOnlineTimeSeconds": number,
            "rating": number,
            "friendOfCount": number,
            "titlePhoto": string,
            "avatar": string,
            "firstName": string,
            "contribution": number,
            "organization": string,
            "rank": string,
            "maxRating": number,
            "registrationTimeSeconds": number,
            "maxRank": string
        }
    },
    "codechef": {
        "handle": string,
        "data": {
            "profile": string,
            "name": string,
            "currentRating": number,
            "highestRating": number,
            "countryFlag": string,
            "countryName": string,
            "globalRank": number,
            "countryRank": number,
            "stars": number
        }
    },
    "atcoder": {
        "handle": string,
        "data": {
            "birthYear": string,
            "country": string,
            "rank": string,
            "rating": string,
            "highestRating": string,
            "ratedMatches": string
        }
    }
}


### Delete a user
- Method: DELETE
- Path: /api/v1/users/:userId



## User Requests

### Signup user requests
- Method: POST
- Path: /api/v1/userRequests/signup
- Body: {
    "name": string,
    "universityId": string,
    "email": string,
    "gender": ["male","female"]
    "CodeforcesID": string,
    "CodechefID": string,
    "AtcoderID": string
}


### Get all user requests
- Method: GET
- Path: /api/v1/userRequests


### Approve a user request
- Method: GET
- Path: /api/v1/userRequests/:userRequestId


### Delete a user request
- Method: DELETE
- Path: /api/v1/userRequests/:userRequestId



## Contests

### Get all contests
- Method: GET
- Path: /api/v1/contests


### Create a contest
- Method: POST
- Path: /api/v1/contests
- Body: {
    "link": string,
    "name": string,
    "password": string,
    "date": date,
    "time": string,
    "duration": string,
    "description": string,
    "type": ["team","individual"]
}


### Get a contest
- Method: GET
- Path: /api/v1/contests/:contestId


### Delete a contest
- Method: DELETE
- Path: /api/v1/contests/:contestId


### Update a contest
- Method: PUT
- Path: /api/v1/contests/:contestId



## Announcements

### Get all announcements
- Method: GET
- Path: /api/v1/announcements


### Create an announcement
- Method: POST
- Path: /api/v1/announcements
- Body: {
    "date": date,
    "body": string,
    "userId": string
    }


### Get an announcement
- Method: GET
- Path: /api/v1/announcements/:announcementId


### Delete an announcement
- Method: DELETE
- Path: /api/v1/announcements/:announcementId


### Update an announcement
- Method: PUT
- Path: /api/v1/announcements/:announcementId
