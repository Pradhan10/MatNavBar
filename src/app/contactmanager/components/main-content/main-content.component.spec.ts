import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import {MainContentComponent} from "./main-content.component";
import {UserService} from "../../services/user.service";
import {AppModule} from "../../../app.module";

let comp: MainContentComponent;
let fixture: ComponentFixture<MainContentComponent>;

describe('MainContent Component', () => {

  const httpClientSpy = jasmine.createSpyObj('httpClient', ['get']);
  const userService = new UserService(httpClientSpy as any);
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule, RouterTestingModule ],
      providers: [
        { provide: UserService}
      ]
    })
    .compileComponents();
  }));

  it('should have ngOnInit() method', () => {
    fixture = TestBed.createComponent(MainContentComponent);
    comp = fixture.componentInstance;
    expect(comp.ngOnInit()).toHaveBeenCalled();
  });

});
