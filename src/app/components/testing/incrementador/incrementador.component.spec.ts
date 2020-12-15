import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('Incremendator Component', () => {

  let component: IncrementadorComponent;
  let fixture: ComponentFixture<IncrementadorComponent>;

  beforeEach( () => {
      TestBed.configureTestingModule({
          declarations: [ IncrementadorComponent ],
          imports: [ FormsModule ]
      });

      fixture = TestBed.createComponent(IncrementadorComponent);
      component = fixture.componentInstance;

  });

  it('Demostrar cambio de leyenda', () => {

    component.leyenda = 'Progreso de carga';

    fixture.detectChanges(); //Disparar la deteccion de cambios

    const elem : HTMLElement = fixture.debugElement.query( By.css('h3') ).nativeElement;

    expect( elem.innerHTML ).toContain('Progreso de carga');
  });

  it('Debe mostrar en el input el valor' , () => {
    component.cambiarValor(5);
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const input = fixture.debugElement.query( By.css('input')).nativeElement;    
      console.log(input);  
      expect( input.value ).toBe( '55' );
    });   

  });

  it (' Debe incrementar en 5, con un click en el botón', () => {
    const botones = fixture.debugElement.queryAll( By.css('.btn-primary'));

    botones[0].triggerEventHandler('click', null);
    expect( component.progreso ).toBe(45);

    botones[1].triggerEventHandler('click', null);
    expect( component.progreso ).toBe(50);
  });
  
});