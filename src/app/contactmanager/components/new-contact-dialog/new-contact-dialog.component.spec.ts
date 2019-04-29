import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {UserService} from '../../services/user.service';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {asyncData} from '../../../testing/async-observable-helpers';
import {NewContactDialogComponent} from './new-contact-dialog.component';
import {getOneTestUser} from '../../models/testing/test-users';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ContactmanagerAppComponent} from '../../contactmanager-app.component';
import {MainContentComponent} from '../main-content/main-content.component';
import {SidenavComponent} from '../sidenav/sidenav.component';
import {ToolbarComponent} from '../toolbar/toolbar.component';
import {MaterialModule} from '../../../shared/material.module';

let comp: NewContactDialogComponent;
let fixture: ComponentFixture<NewContactDialogComponent>;

describe('NewContactDialog Component', () => {
  beforeEach(async () => {
    const dialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);
    const userComponentSpy = jasmine.createSpyObj('UserService', ['addUser']);
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ContactmanagerAppComponent,
        MainContentComponent,
        SidenavComponent,
        ToolbarComponent,
        NewContactDialogComponent
      ],
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: []},
        {provide: UserService, useValue: userComponentSpy},
        {provide: MatDialogRef, useValue: dialogRefSpy}
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(NewContactDialogComponent);
      comp = fixture.componentInstance;

      // getHeroes spy returns observable of test heroes
      userComponentSpy.addUser.and.returnValue(asyncData(getOneTestUser()));
    });
  });
  tests();

});

function tests() {
  it('should call ngOnInit()', () => {
    const secFixture = TestBed.createComponent(NewContactDialogComponent);
    const secComp = secFixture.componentInstance;
    expect(secComp.ngOnInit()).toBeDefined();
  });

  it('should call getErrorMessage()', () => {
    const secFixture = TestBed.createComponent(NewContactDialogComponent);
    const secComp = secFixture.componentInstance;
    expect(secComp.getErrorMessage()).toBeDefined();
  });

  it('should call save()', () => {
    const secFixture = TestBed.createComponent(NewContactDialogComponent);
    const secComp = secFixture.componentInstance;
    expect(secComp.save()).toBeUndefined();
  });

  it('should call dismiss()', () => {
    const secFixture = TestBed.createComponent(NewContactDialogComponent);
    const secComp = secFixture.componentInstance;
    expect(secComp.dismiss()).toBeUndefined();
  });
}

