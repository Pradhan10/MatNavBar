import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RouterTestingModule} from '@angular/router/testing';
import {MainContentComponent} from './main-content.component';
import {UserService} from '../../services/user.service';
import {AppModule} from '../../../app.module';
import {ContactmanagerAppComponent} from '../../contactmanager-app.component';
import {SidenavComponent} from '../sidenav/sidenav.component';
import {MaterialModule} from '../../../shared/material.module';
import {ToolbarComponent} from '../toolbar/toolbar.component';
import {NewContactDialogComponent} from '../new-contact-dialog/new-contact-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import 'rxjs-compat/add/observable/from';

let comp: MainContentComponent;
let fixture: ComponentFixture<MainContentComponent>;

describe('MainContent Component', () => {

  const httpClientSpy = jasmine.createSpyObj('httpClient', ['get']);
  const userService = new UserService(httpClientSpy as any);
  // @ts-ignore
  const dummyActivatedroute;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        RouterTestingModule,
        MaterialModule,
        FormsModule,
        BrowserModule,
        ReactiveFormsModule
      ],
      declarations: [
        MainContentComponent,
        ContactmanagerAppComponent,
        SidenavComponent,
        ToolbarComponent,
        NewContactDialogComponent],
      providers: [
        {provide: UserService, useValue: userService}
      ]
    })
    .compileComponents();
  }));

  it('should have ngOnInit() method', () => {
    fixture = TestBed.createComponent(MainContentComponent);
    comp = fixture.componentInstance;
    expect(comp.ngOnInit()).toBeUndefined();
  });

  /*
    it('should have ngOnInit() -> subscribe() method', () => {
      fixture = TestBed.createComponent(MainContentComponent);
      comp = fixture.componentInstance;
      const service = TestBed.get(UserService);
      spyOn(comp, ['ngOnInit']);
      expect(comp.ngOnInit()).toBeUndefined();
    });
  */
  /*  it('should call service.users.subscribe', () => {
      fixture = TestBed.createComponent(MainContentComponent);
      comp = fixture.componentInstance;
      const service = TestBed.get(userService);
    });*/
  it('should call setTimeout method', () => {
    fixture = TestBed.createComponent(MainContentComponent);
    comp = fixture.componentInstance;
    const timeout = comp.callTimeOut(1);
  });

  it('should call setTimeout inside ngOnInit()', () => {
    comp.ngOnInit();
    comp.service.users.subscribe();
  });
});
