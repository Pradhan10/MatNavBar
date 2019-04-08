import {Router, RouterModule} from '@angular/router';
import {ToolbarComponent} from './toolbar.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {MaterialModule} from '../../../shared/material.module';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {Component, NgModule} from '@angular/core';
import {NewContactDialogComponent} from '../new-contact-dialog/new-contact-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import {UserService} from '../../services/user.service';
import {ContactmanagerAppComponent} from '../../contactmanager-app.component';
import {MainContentComponent} from '../main-content/main-content.component';
import {SidenavComponent} from '../sidenav/sidenav.component';
import {MatDialog, MatSelect, MatSnackBar} from '@angular/material';
import {of} from "rxjs/internal/observable/of";


/*Tests for other than dialog reference*/
describe('ToolbarComponent [with mocks]', () => {
  let routerClient: Router;
  let toolbarComponent: ToolbarComponent;
  let comp: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // Import the httpClient mocking service
      // Import Dialog Test Module
      imports: [RouterTestingModule,
        MaterialModule,
        NoopAnimationsModule,
        RouterTestingModule.withRoutes([])
      ],
      // Provide the service-under-test
      providers: [ToolbarComponent]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(ToolbarComponent);
      comp = fixture.componentInstance;
    });
    // Inject
    routerClient = TestBed.get(Router);
    toolbarComponent = TestBed.get(ToolbarComponent);
    router = TestBed.get(Router);

  });

  it('should create ToolBar Component', () => {
    expect(toolbarComponent).toBeDefined();
  });

  /* TEST IT FROM HERE : http://angular-tips.com/blog/2018/02/testing-angular-material-dialog-templates/*/

  it('should call openSnackBar', () => {
    expect(toolbarComponent.openSnackBar('mock', 'mockAction')).toBeDefined();
  });

  fit('should call openAddContactDialog', () => {
    // Arrange
    // const overlayContainerElement: HTMLElement;
/*
    const snack = jasmine.createSpyObj('MatSnackBar', ['open']);
    const testToolBarComponent = new ToolbarComponent(dialog, snack, router);
    const afterCloseCallback = jasmine.createSpy('afterClose callback');


    // assert
    expect(testToolBarComponent.openAddContactDialog()).toBeUndefined();
*/
    let dialog: MatDialog;
    dialog = TestBed.get(MatDialog);
    const dialogRef = dialog.open(NewContactDialogComponent, {
      width: '450px'
    });
    let temp: any;
    const ans = dialogRef.afterClosed().subscribe(result => temp);
    spyOn(dialogRef, 'afterClosed').and.returnValues(of({
      result: true
    }));
    expect(dialogRef.afterClosed()).toHaveBeenCalled();
    expect(temp).toBeDefined();
  });

  it('should call ngOnInit()', () => {
    expect(toolbarComponent.ngOnInit()).toHaveBeenCalled();
  });
});


