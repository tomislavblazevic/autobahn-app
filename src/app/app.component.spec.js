
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AutobahnService } from './autobahn.service';
import { isAssertionExpression } from 'typescript';



describe('AppComponent', () => {


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [HttpClientModule, RouterTestingModule.withRoutes([])],
      providers: [AutobahnService, Title],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    titleService = TestBed.inject(Title);
    autobahnService = TestBed.inject(AutobahnService);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'autobahn-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect({app,Title}).toEqual;'autobahn-app';
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
const compiled = fixture.nativeElement;
const title = fixture.debugElement.nativeElement.querySelector;
    expect(compiled.querySelector('.content span')?.textContent).toContain('autobahn-app app is running!');
  });
});
