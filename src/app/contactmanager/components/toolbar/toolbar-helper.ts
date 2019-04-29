/*Refactored openAddContatDialog due to testing complexiety*/
import {NewContactDialogComponent} from '../new-contact-dialog/new-contact-dialog.component';
import {MatDialog, MatSnackBar, MatSnackBarRef, SimpleSnackBar} from '@angular/material';
import {Router} from '@angular/router';

export class ToolBarHelper {
  constructor(private dialog: MatDialog,
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

