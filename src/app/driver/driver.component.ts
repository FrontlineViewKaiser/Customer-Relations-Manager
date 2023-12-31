import { Component } from '@angular/core';
import {
  MatDialog,
} from '@angular/material/dialog';

import { ContactDialogueComponent } from '../contact-dialogue/contact-dialogue.component';
import { DetailDialogueComponent } from '../detail-dialogue/detail-dialogue.component';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})
export class DriverComponent {
  DetailDialogue = DetailDialogueComponent
  ContactDialogue = ContactDialogueComponent
  drivers = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]

  constructor(public dialog: MatDialog) {}

  openDialog(component) {
    this.dialog.open(component);
  }

}
