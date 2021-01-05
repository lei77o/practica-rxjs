import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposService } from 'src/app/services/tipos.service';

import { HeaderComponent } from './header.component';

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

describe('Header component', () => {
  
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async()=>{

  });

  beforeEach( ()=>{

    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [ TiposService ],
      imports: [ HttpClient ]
    })
    //.compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
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
