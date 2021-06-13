import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestablecercontasenaComponent } from './restablecercontasena.component';

describe('RestablecercontasenaComponent', () => {
  let component: RestablecercontasenaComponent;
  let fixture: ComponentFixture<RestablecercontasenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestablecercontasenaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestablecercontasenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
