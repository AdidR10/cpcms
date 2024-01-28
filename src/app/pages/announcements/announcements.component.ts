import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AnnouncementFormComponent } from 'src/app/components/announcement-form/announcement-form.component';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class AnnouncementsComponent {
  pagename='Announcements';
  constructor(private _dialog:MatDialog){}

  openAnnouncementForm(){
    this._dialog.open(AnnouncementFormComponent);
  }
}
