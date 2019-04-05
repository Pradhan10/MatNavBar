/*Test for dialog ref*/
import {MatDialog, MatSelect} from "@angular/material";
import {Component, NgModule} from '@angular/core';
import {OverlayContainer} from '@angular/cdk/overlay';
import {NewContactDialogComponent} from "../new-contact-dialog/new-contact-dialog.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {FlexLayoutModule} from "@angular/flex-layout";
import {UserService} from "../../services/user.service";
import {ContactmanagerAppComponent} from "../../contactmanager-app.component";
import {MainContentComponent} from "../main-content/main-content.component";
import {SidenavComponent} from "../sidenav/sidenav.component";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {ToolbarComponent} from "../toolbar/toolbar.component";
import {MaterialModule} from "../../../shared/material.module";
import {RouterModule} from "@angular/router";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";

describe('NewDialogComponent', () => {
  let dialog: MatDialog;
  let overlayContainerElement: HTMLElement;
  let noop: ComponentFixture<NoopComponent>;
  let comp: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  /*Attempt two*/
  let toolbarComponent: ToolbarComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ ToolbarComponent ],
      providers: [
        { provide: OverlayContainer, useFactory: () => {
            overlayContainerElement = document.createElement('div');
            return { getContainerElement: () => overlayContainerElement };
          }}
      ]
    });

    dialog = TestBed.get(MatDialog);
    fixture = TestBed.createComponent(ToolbarComponent);
    comp = fixture.componentInstance;
    noop = TestBed.createComponent(NoopComponent);
/*    toolbarComponent = new ToolbarComponent(dialog, )*/
  });
  fit('should call dismiss method',  () => {
    comp.openAddContactDialog();
  });
});

// Noop component is only a workaround to trigger change detection
@Component({
  template: ''
})
class NoopComponent {}

const TEST_DIRECTIVES = [
  NewContactDialogComponent,
  NoopComponent,
  MatSelect
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NoopAnimationsModule
  ],
  providers: [
    UserService
  ],
  declarations: [
    ContactmanagerAppComponent,
    ToolbarComponent,
    MainContentComponent,
    SidenavComponent,
    NewContactDialogComponent
  ],
  entryComponents: [
    NewContactDialogComponent
  ]

})
class DialogTestModule { }
