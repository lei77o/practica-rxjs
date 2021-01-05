import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNgrxComponent } from './view-ngrx.component';

describe('ViewNgrxComponent', () => {
  let component: ViewNgrxComponent;
  let fixture: ComponentFixture<ViewNgrxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewNgrxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
