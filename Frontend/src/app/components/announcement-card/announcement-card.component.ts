import { Component, EventEmitter, Input, Output, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/services/admin.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-announcement-card',
  templateUrl: './announcement-card.component.html',
  styleUrls: ['./announcement-card.component.scss']
})
export class AnnouncementCardComponent {
  @Output() editClicked: EventEmitter<string> = new EventEmitter<string>();
  @Output() deleteClicked: EventEmitter<string> = new EventEmitter<string>();

  edit(id: string): void {
    this.editClicked.emit(id);
  }

  delete(id:string): void {
    this.deleteClicked.emit(id);
  }

  @Input() announcement: any;
  isDropdownOpen: boolean = false;
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  constructor(
    private _adminService:AdminService,
    private _dialog: MatDialog,
    private renderer: Renderer2, 
    private elementRef: ElementRef,
    private authService: AuthenticationService
    ){};
    @HostListener('document:click', ['$event'])
    handleClick(event: Event): void {
      if (!this.elementRef.nativeElement.contains(event.target)) {
        this.isDropdownOpen = false;
      }
    }
    checkAuthentication(){
      return this.authService.isAuthenticated();
    }
    
}
