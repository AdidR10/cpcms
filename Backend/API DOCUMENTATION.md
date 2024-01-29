
## Users

### Get all users
- Method: GET
- Path: /api/v1/users
- Controller: userController.getAllUsers

### Get a user
- Method: GET
- Path: /api/v1/users/:userId
- Controller: userController.getUser

### Delete a user
- Method: DELETE
- Path: /api/v1/users/:userId
- Controller: userController.deleteUser


## User Requests

### Signup user requests
- Method: POST
- Path: /api/v1/userRequests/signup
- Controller: userRequestController.signupUserRequests

### Get all user requests
- Method: GET
- Path: /api/v1/userRequests
- Controller: userRequestController.getAllUserRequests

### Approve a user request
- Method: GET
- Path: /api/v1/userRequests/:userRequestId
- Controller: userRequestController.approveUserRequest

### Delete a user request
- Method: DELETE
- Path: /api/v1/userRequests/:userRequestId
- Controller: userRequestController.deleteUserRequest


## Contests

### Get all contests
- Method: GET
- Path: /api/v1/contests
- Controller: contestController.getAllContests

### Create a contest
- Method: POST
- Path: /api/v1/contests
- Controller: contestController.createContest

### Get a contest
- Method: GET
- Path: /api/v1/contests/:contestId
- Controller: contestController.getContest

### Delete a contest
- Method: DELETE
- Path: /api/v1/contests/:contestId
- Controller: contestController.deleteContest

### Update a contest
- Method: PUT
- Path: /api/v1/contests/:contestId
- Controller: contestController.updateContest


## Announcements

### Get all announcements
- Method: GET
- Path: /api/v1/announcements
- Controller: announcementController.getAllAnnouncements

### Create an announcement
- Method: POST
- Path: /api/v1/announcements
- Controller: announcementController.createAnnouncement

### Get an announcement
- Method: GET
- Path: /api/v1/announcements/:announcementId
- Controller: announcementController.getAnnouncement

### Delete an announcement
- Method: DELETE
- Path: /api/v1/announcements/:announcementId
- Controller: announcementController.deleteAnnouncement

### Update an announcement
- Method: PUT
- Path: /api/v1/announcements/:announcementId
- Controller: announcementController.updateAnnouncement

