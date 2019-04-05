import {ContactmanagerAppComponent} from "./contactmanager-app.component";
import {async} from "@angular/core/testing";
import {MatIconRegistry} from "@angular/material";
import {DomSanitizer} from "@angular/platform-browser";

describe('ContactManagerComponent', () => {
  let testContactManagerComponent: ContactmanagerAppComponent;
  let mockMatIconRegistry: MatIconRegistry;
  let mockDomSanitizer: DomSanitizer;
  beforeEach(async(() => {
    mockMatIconRegistry = jasmine.createSpyObj('MatIconRegistry', ['addSvgIconSet']);
    mockDomSanitizer = jasmine.createSpyObj('DomSanitizer', ['bypassSecurityTrustResourceUrl']);
    testContactManagerComponent = new ContactmanagerAppComponent(mockMatIconRegistry, mockDomSanitizer);
  }));
  it('should create', function () {
    expect(testContactManagerComponent).toBeTruthy();
  });


});
