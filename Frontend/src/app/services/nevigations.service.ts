import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NevigationsService {

  constructor() { }
  navigateToExternalProfile(handle: string, site: string) {
    if(site=='codeforces'){
      window.location.href = `https://codeforces.com/profile/${handle}`;
    }
    else if(site=='codechef'){
      window.location.href = `https://www.codechef.com/users/${handle}`;
    }
    else if(site=='atcoder'){
      window.location.href = `https://atcoder.jp/users/${handle}`;
    }
    else if(site=='vjudge'){
      window.location.href = `https://vjudge.net/user/${handle}`;
    }
  }
}
