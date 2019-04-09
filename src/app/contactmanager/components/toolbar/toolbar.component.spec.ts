import {Router} from '@angular/router';
import {ToolbarComponent} from './toolbar.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {MaterialModule} from '../../../shared/material.module';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';


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

  it('should have ngOnInit() method', () => {
    expect(toolbarComponent.ngOnInit()).toBeDefined();
  });
  /* TEST IT FROM HERE : http://angular-tips.com/blog/2018/02/testing-angular-material-dialog-templates/*/


});
