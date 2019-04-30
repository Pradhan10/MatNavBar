import {Router} from '@angular/router';
import {ToolbarComponent} from './toolbar.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {MaterialModule} from '../../../shared/material.module';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialog} from '@angular/material';
import {of} from 'rxjs/internal/observable/of';


/*<<-- Create a MatDialog mock class -->>*/
export class MatDialogMock {
  // When the component calls this.dialog.open(...) we'll return an object
  // with an afterClosed method that allows to subscribe to the dialog result observable.
  open() {
    return {
      afterClosed: () => of({action: true})
    };
  }
}



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
      providers: [ToolbarComponent,
        {provide: MatDialog, useClass: MatDialogMock} ]
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

  it('should have openAddContactDialog() method', () => {
    expect(toolbarComponent.openAddContactDialog()).toBeUndefined();
  });

});
