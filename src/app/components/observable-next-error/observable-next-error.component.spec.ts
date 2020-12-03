import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableNextErrorComponent } from './observable-next-error.component';

describe('ObservableNextErrorComponent', () => {
  let component: ObservableNextErrorComponent;
  let fixture: ComponentFixture<ObservableNextErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservableNextErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableNextErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
