import {TestBed} from '@angular/core/testing';
import {SidenavComponent} from './sidenav.component';
import {NgZone, NO_ERRORS_SCHEMA} from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';


describe('SideNav Component', () => {
  let zone: NgZone;
  let userService: UserService;
  let router: Router;
  let fixture;
  let sidenavComponent;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([]),
        HttpClientTestingModule],
      declarations: [SidenavComponent],
      providers: [UserService],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    router = TestBed.get(Router);
    fixture = TestBed.createComponent(SidenavComponent);
    router.initialNavigation();
    sidenavComponent = fixture.componentInstance;

    /*Http specific assignments*/
    // Inject the http, test controller, and service-under-test
    // as they will be referenced by each test.
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should have sidenavComponent defined', () => {
    expect(sidenavComponent).toBeDefined();
  })

  it('should have toggleTheme defined',  () => {
    expect(sidenavComponent.toggleTheme()).toBeUndefined();
  });

  it('should have toggleDir defined',  () => {
    expect(sidenavComponent.toggleDir()).toBeUndefined();
  });

  it('should have isScreenSmall defined',  () => {
    expect(sidenavComponent.isScreenSmall()).toBeDefined();
  });

  it('should not initialize vars before ngOnInit',() => {
    expect(sidenavComponent.users).toBeUndefined();
  });
});
