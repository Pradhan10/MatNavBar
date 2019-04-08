import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppModule } from 'mat-nav-bar/src/app/app.module';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from 'mat-nav-bar/src/app/contactmanager/services/user.service';
import { MainContentComponent } from 'mat-nav-bar/src/app/contactmanager/components/main-content/main-content.component';

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
