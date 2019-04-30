import {getTestBed, TestBed} from '@angular/core/testing';
import {UserService} from './user.service';
import {getOneTestUser, getTestUsers} from '../models/testing/test-users';
import {User} from '../models/user';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';
import { Response, ResponseOptions, ResponseType, Request } from '@angular/http';


describe('UserService (with spies)', () => {

  let httpClientSpy: { get: jasmine.Spy };
  let userService: UserService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('httpClient', ['get']);
    userService = new UserService(httpClientSpy as any);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    userService = TestBed.get(UserService);
  });

  it('should have users method', () => {
    // Arrange
    /*all is arranged in beforeEach, as userService is ready*/
    // Act
    /*Nothing to do here*/
    // Assert
    expect(userService.users).toBeDefined();
  });

  it('should have addUser method', () => {
    // Arrange
    /*all is arranged in beforeEach, as userService is ready*/
    // Act
    /*Nothing to do here*/
    // Assert
    expect(userService.addUser(getOneTestUser())).toBeDefined();
  });

  it('should have userById method', () => {
    // Arrange
    /*all is arranged in beforeEach, as userService is ready*/
    // Act
    /*Nothing to do here*/
    // Assert
    expect(userService.userById(1)).toBeUndefined();
  });


  it('should have loadAll() method which returns expected users', () => {
    // Arrange
    const expectedUsers: User[] = getTestUsers();
    const mockUserService = TestBed.get(UserService);

    const mockResponse: User[] = getTestUsers();
    // Respond with the mock heroes
    let retResp: User[];
    const check = mockUserService.loadAll(data => {
      retResp = data;
      console.log(data);
    });
  });


});

describe('UserService (with mocks)', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let userMockService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // Import the HttpClient mocking services
      imports: [HttpClientTestingModule],
      // Provide the service-under-test
      providers: [UserService]
    });

    // Inject the http, test controller, and service-under-test
    // as they will be referenced by each test.
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    userMockService = TestBed.get(UserService);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should call loadAll()', () => {
    const service = TestBed.get(UserService);
    spyOn(service, 'loadAll').and.callFake(() => {
      return of(getTestUsers());
    });
    expect(service.assign).toBeDefined();
  });

  it('should call showError()', () => {
    expect(userMockService.showError()).toBeUndefined();
  });

  it('should call assign()', () => {
    expect(userMockService.assign(getTestUsers())).toBeUndefined();
  });
});

describe('UserService (method three)', () => {
  let injector: TestBed;
  let userService: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    const testBedStatic = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    injector = getTestBed();
    userService = injector.get(UserService);
    httpMock = injector.get(HttpTestingController);
  });
  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });

  it('should return expected users list Observable (HttpClient called once)', () => {
    const expectedUsers: User[] = [
      {
        id: 1,
        name: 'Leanne Graham',
        avatar: 'random',
        bio: 'other',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
          street: 'Kulas Light',
          suite: 'Apt. 556',
          city: 'Gwenborough',
          zipcode: '92998-3874',
          geo: {
            lat: '-37.3159',
            lng: '81.1496'
          }
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
          name: 'Romaguera-Crona',
          catchPhrase: 'Multi-layered client-server neural-net',
          bs: 'harness real-time e-markets'
        }
      },
      {
        id: 2,
        name: 'Ervin Howell',
        avatar: 'random',
        bio: 'other',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
          street: 'Victor Plains',
          suite: 'Suite 879',
          city: 'Wisokyburgh',
          zipcode: '90566-7771',
          geo: {
            lat: '-43.9509',
            lng: '-34.4618'
          }
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
          name: 'Deckow-Crist',
          catchPhrase: 'Proactive didactic contingency',
          bs: 'synergize scalable supply-chains'
        }
      },
      {
        id: 3,
        name: 'Clementine Bauch',
        avatar: 'random',
        bio: 'other',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        address: {
          street: 'Douglas Extension',
          suite: 'Suite 847',
          city: 'McKenziehaven',
          zipcode: '59590-4157',
          geo: {
            lat: '-68.6102',
            lng: '-47.0653'
          }
        },
        phone: '1-463-123-4447',
        website: 'ramiro.info',
        company: {
          name: 'Romaguera-Jacobson',
          catchPhrase: 'Face to face bifurcated interface',
          bs: 'e-enable strategic applications'
        }
      },
      {
        id: 4,
        name: 'Patricia Lebsack',
        avatar: 'random',
        bio: 'other',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        address: {
          street: 'Hoeger Mall',
          suite: 'Apt. 692',
          city: 'South Elvis',
          zipcode: '53919-4257',
          geo: {
            lat: '29.4572',
            lng: '-164.2990'
          }
        },
        phone: '493-170-9623 x156',
        website: 'kale.biz',
        company: {
          name: 'Robel-Corkery',
          catchPhrase: 'Multi-tiered zero tolerance productivity',
          bs: 'transition cutting-edge web services'
        }
      }];
    userService.loadAll();
    expect(userService.users).toBeDefined();
  });


});
