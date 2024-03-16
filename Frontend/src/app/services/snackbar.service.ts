// snackbar.service.ts
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) { }

  showSnackbar(message: string, isSuccess: boolean): void {
    this.snackBar.open(message, '', {
      duration: 3000, // Snackbar duration in milliseconds
      horizontalPosition: 'start', // Slide from left
      verticalPosition: 'bottom', // Display at the bottom
      panelClass: isSuccess ? ['success-snackbar'] : ['error-snackbar']// Custom CSS class for styling
    });
  }
}
