// userModel.ts

export interface User {
    name: string;
    universityId: string; // Assuming universityId is a string
    email: string;
    gender: 'male' | 'female';
    _id: string; 
    codeforces: {
      handle: string;
      data: {
        lastName: string;
        lastOnlineTimeSeconds: number;
        rating: number;
        friendOfCount: number;
        titlePhoto: string;
        avatar: string;
        firstName: string;
        contribution: number;
        organization: string;
        rank: string;
        maxRating: number;
        registrationTimeSeconds: number;
        maxRank: string;
      };
    };
    codechef: {
      handle: string;
      data: {
        profile: string;
        name: string;
        currentRating: number;
        highestRating: number;
        countryFlag: string;
        countryName: string;
        globalRank: number;
        countryRank: number;
        stars: number;
      };
    };
    atcoder: {
      handle: string;
      data: {
        birthYear: string;
        country: string;
        rank: string;
        rating: string;
        highestRating: string;
        ratedMatches: string;
      };
    };
  }
  