import { Component } from '@angular/core';

@Component({
  selector: 'app-temperatura',
  templateUrl: './temperatura.component.html',
  styleUrls: ['./temperatura.component.css']
})
export class TemperaturaComponent {
num1='';
resultado:number=0;
operacion: string = ''; 
calcular() {
  switch (this.operacion) {
    case 'f':
      this.resultado = (parseFloat(this.num1)-32) * (5/9);
      break;
    case 'c':
      this.resultado = (parseFloat(this.num1) * (9/5)) + 32;
      break;
  
    }
  }
}
