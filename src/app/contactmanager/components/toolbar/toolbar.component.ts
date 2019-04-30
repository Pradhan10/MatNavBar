import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import {NewContactDialogComponent} from '../new-contact-dialog/new-contact-dialog.component';
import {Router} from '@angular/router';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  entryComponents: [NewContactDialogComponent]
})
export class ToolbarComponent {

  constructor(
    private dialog: MatDialog,
    private router: Router) {
  }
  openAddContactDialog(): void {
    const dialogRef = this.dialog.open(NewContactDialogComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);

      if (result) {
        this.router.navigate(['/contactmanager', result.id]);
      }
    });
  }



}
