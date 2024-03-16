import { AuthenticationService } from './../../services/authentication.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(
    private router: Router, 
    private dialog: MatDialog,
    private authService: AuthenticationService
    ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.formGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  loginProcess() {
    if (this.formGroup.valid) {
      const username = this.formGroup.get('username')?.value;
      const password = this.formGroup.get('password')?.value;
      this.authService.login(username, password).subscribe(
        (success) => {
          // Authentication successful
          this.router.navigate(['/admin-dash-board']);
        },
        (error) => {
          // Authentication failed
          // You can display an error message or open a dialog to inform the user
          console.error('Authentication failed:', error);
          alert('Authentication failed. Please check your username and password.');

        }
      );

      // this.router.navigate(['/admin-dash-board']);
    } else {
      this.openDialog();
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '250px', // Set the width as needed
      disableClose: true, // Prevent closing by clicking outside or pressing Esc
    });

    dialogRef.afterClosed().subscribe(result => {
      // Handle dialog close event
      if (result === true) {
        // Proceed with login process (navigate to announcement page, for example)
      }
    });
  }
}
