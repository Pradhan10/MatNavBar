import {Router} from '@angular/router';
import {ToolbarComponent} from './toolbar.component';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {MaterialModule} from '../../../shared/material.module';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialog, MatDialogRef, MatSnackBar} from '@angular/material';
import {ActivatedRouteStub} from '../../../testing/activated-route-stub';
import {asyncData} from '../../../testing/async-observable-helpers';
import {NewContactDialogComponent} from "../new-contact-dialog/new-contact-dialog.component";


/*Tests for other than dialog reference*/
fdescribe('ToolbarComponent [with mocks]', () => {
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

  it('should call openAddContactDialog()', () => {
    const mockDialog = TestBed.get(MatDialog);
    const mockSnack = TestBed.get(MatSnackBar);
    const mockRouter = TestBed.get(Router);
    const myComp: ToolbarComponent = new ToolbarComponent(mockDialog, mockSnack, mockRouter);
    const res = myComp.openAddContactDialog();
    class ToolbarComponentSpy {
      dialog = mockDialog;
      dialogRef: MatDialogRef<NewContactDialogComponent> = this.dialog.open(NewContactDialogComponent, {
        width: '450px'
      });
      /* emit cloned test hero */
      openAddContactDialog = jasmine.createSpy('openAddContactDialog').and.callFake(
        () => asyncData(Object.assign({}, this.dialogRef))
      );

/*      /!* emit clone of test hero, with changes merged in *!/
      saveHero = jasmine.createSpy('saveHero').and.callFake(
        (hero: Hero) => asyncData(Object.assign(this.testHero, hero))
      );*/
    }
    beforeEach(async(() => {
      const routerSpy = createRouterSpy();

      TestBed.configureTestingModule({
        imports:   [ HeroModule ],
        providers: [
          { provide: ActivatedRoute, useValue: activatedRoute },
          { provide: Router,         useValue: routerSpy},
          // HeroDetailService at this level is IRRELEVANT!
          { provide: HeroDetailService, useValue: {} }
        ]
      })

      // Override component's own provider
        .overrideComponent(HeroDetailComponent, {
          set: {
            providers: [
              { provide: HeroDetailService, useClass: HeroDetailServiceSpy }
            ]
          }
        })

        .compileComponents();
    }));
    const compSpy = fixture.debugElement.injector.get(NewContactDialogComponent) as any;
    expect(res).toBeDefined();
    fixture.detectChanges();
/*    expect(res).toContain(dialogRef);*/
  });


});
