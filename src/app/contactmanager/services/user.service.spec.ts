import {getTestBed, TestBed} from '@angular/core/testing';
import {UserService} from './user.service';
import {getOneTestUser, getTestUsers} from '../models/testing/test-users';
import {Company, User} from '../models/user';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClient} from '@angular/common/http';
import {Subscription} from "rxjs";
import {Address} from "../models/address";


describe('UserService (with spies)', () => {

  let httpClientSpy: { get: jasmine.Spy };
  let userService: UserService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('httpClient', ['get']);
    userService = new UserService(<any>httpClientSpy);

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

  it('should have loadAll() method which returns expected heroes', () => {
    // Arrange
    const expectedUsers: User[] = getTestUsers();
    httpClientSpy.get.and.returnValue((expectedUsers));
    let httpTestingController: HttpTestingController;
    // Act
    /*Nothing to do here*/
    // Assert
    expect(userService.userById(1)).toBeUndefined();
  });

  it('should have loadAll() method which returns expected users', () => {
    // Arrange
    const expectedUsers: User[] = getTestUsers();
    const mockUserService = TestBed.get(UserService);
    // HeroService should have made one request to GET heroes from expected URL
    /*
        const req = httpTestingController.expectOne(userService.usersUrl);
        expect(req.request.method).toEqual('GET');
    */

    const mockResponse: User[] = [
      {
        id: 1,
        name: 'Leanne Graham',
        avatar: 'some',
        bio: 'Jhoot',
        username: 'Bret',
        email: 'Sincere@april.biz',
        phone: '1-770-736-8031 x56442',
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
        website: 'hildegard.org',
        company: {
          name: 'Romaguera-Crona',
          catchPhrase: 'Multi-layered client-server neural-net',
          bs: 'harness real-time e-markets'
        }
      },
      {
        id: 2,
        avatar: 'some',
        bio: 'Jhoot',
        name: 'Ervin Howell',
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
        avatar: 'some',
        bio: 'Jhoot',
        name: 'Clementine Bauch',
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
        avatar: 'some',
        bio: 'Jhoot',
        name: 'Patricia Lebsack',
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
      },
      {
        id: 5,
        avatar: 'some',
        bio: 'Jhoot',
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        address: {
          street: 'Skiles Walks',
          suite: 'Suite 351',
          city: 'Roscoeview',
          zipcode: '33263',
          geo: {
            lat: '-31.8129',
            lng: '62.5342'
          }
        },
        phone: '(254)954-1289',
        website: 'demarco.info',
        company: {
          name: 'Keebler LLC',
          catchPhrase: 'User-centric fault-tolerant solution',
          bs: 'revolutionize end-to-end systems'
        }
      },
      {
        id: 6,
        avatar: 'some',
        bio: 'Jhoot',
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        address: {
          street: 'Norberto Crossing',
          suite: 'Apt. 950',
          city: 'South Christy',
          zipcode: '23505-1337',
          geo: {
            lat: '-71.4197',
            lng: '71.7478'
          }
        },
        phone: '1-477-935-8478 x6430',
        website: 'ola.org',
        company: {
          name: 'Considine-Lockman',
          catchPhrase: 'Synchronised bottom-line interface',
          bs: 'e-enable innovative applications'
        }
      },
      {
        id: 7,
        avatar: 'some',
        bio: 'Jhoot',
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        address: {
          street: 'Rex Trail',
          suite: 'Suite 280',
          city: 'Howemouth',
          zipcode: '58804-1099',
          geo: {
            lat: '24.8918',
            lng: '21.8984'
          }
        },
        phone: '210.067.6132',
        website: 'elvis.io',
        company: {
          name: 'Johns Group',
          catchPhrase: 'Configurable multimedia task-force',
          bs: 'generate enterprise e-tailers'
        }
      },
      {
        id: 9,
        avatar: 'some',
        bio: 'Jhoot',
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        address: {
          street: 'Ellsworth Summit',
          suite: 'Suite 729',
          city: 'Aliyaview',
          zipcode: '45169',
          geo: {
            lat: '-14.3990',
            lng: '-120.7677'
          }
        },
        phone: '586.493.6943 x140',
        website: 'jacynthe.com',
        company: {
          name: 'Abernathy Group',
          catchPhrase: 'Implemented secondary concept',
          bs: 'e-enable extensible e-tailers'
        }
      },
      {
        id: 10,
        avatar: 'some',
        bio: 'Jhoot',
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        address: {
          street: 'Dayna Park',
          suite: 'Suite 449',
          city: 'Bartholomebury',
          zipcode: '76495-3109',
          geo: {
            lat: '24.6463',
            lng: '-168.8889'
          }
        },
        phone: '(775)976-6794 x41206',
        website: 'conrad.com',
        company: {
          name: 'Yost and Sons',
          catchPhrase: 'Switchable contextually-based project',
          bs: 'aggregate real-time technologies'
        }
      }
    ];
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

  it('should return expected users (called once)', () => {

    // Arrange
    let expectedUsers = getTestUsers();
    let temp = userMockService.loadAll();
    // Act
    /*    userMockService.loadAll()(next => temp,
          fail
        );*/
    expect(temp).toContain(expectedUsers);
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
