import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/services/admin.service';

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
  constructor(private _adminService:AdminService,
    private _dialog: MatDialog
    ){};

    
}
