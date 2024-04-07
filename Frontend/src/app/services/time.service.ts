import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TimeService {
  constructor() {}

  calculateTimeLeft(endDateTime: string): string {
    const endDate = new Date(endDateTime);
    console.log(endDate);
    console.log(endDateTime);
    if (isNaN(endDate.getTime())) {
      throw new Error('Invalid date');
    }

    const currentTime = new Date();
    const timeDifference = endDate.getTime() - currentTime.getTime();

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Construct the time left string
    let timeLeft = '';
    if (days > 0) {
      timeLeft += `${days}d `;
    }
    if (hours > 0) {
      timeLeft += `${hours}h `;
    }
    if (minutes > 0) {
      timeLeft += `${minutes}m `;
    }
    if (seconds > 0) {
      timeLeft += `${seconds}s`;
    }

    return timeLeft;
  }
}
