import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {MatDialog, MatSnackBar, MatSnackBarRef, SimpleSnackBar} from '@angular/material';
import {NewContactDialogComponent} from '../new-contact-dialog/new-contact-dialog.component';
import {Router} from '@angular/router';
import {MainContentComponent} from '../main-content/main-content.component';
import {Address} from '../../models/address';
import {Company} from '../../models/user';
import {ToolBarHelper} from './toolbar-helper';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  entryComponents: [NewContactDialogComponent]
})
export class ToolbarComponent implements OnInit {

  toolBarHelper: ToolBarHelper;
  constructor(
    private dialog: MatDialog,
    private router: Router) {
  }

  ngOnInit(): void {
    this.toolBarHelper = new ToolBarHelper(this.dialog, this.router);
  }



}
