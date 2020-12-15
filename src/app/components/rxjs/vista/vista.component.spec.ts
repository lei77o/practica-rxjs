import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposService } from 'src/app/services/tipos.service';

import { VistaComponent } from './vista.component';

/*describe('VistaComponent', () => {
  let component: VistaComponent;
  let fixture: ComponentFixture<VistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});*/

describe('Vista component', () => {
  
  let component: VistaComponent;
  let fixture: ComponentFixture<VistaComponent>;

  beforeEach(async()=>{

  });

  beforeEach( ()=>{

    TestBed.configureTestingModule({
      declarations: [ VistaComponent ],
      providers: [ TiposService ],
      imports: [ HttpClient ]
    })
    //.compileComponents();

    fixture = TestBed.createComponent(VistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('Debe crearse el componente', () => {
    expect( component ).toBeTruthy();
  });

  it('Debe retornar la ruta', () => {
    const sel = 'Filter';
    const res = component.seleccion( sel );

    expect( res ).toContain( sel );
  });

})
