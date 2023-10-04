import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicacion',
  templateUrl: './multiplicacion.component.html',
  styleUrls: ['./multiplicacion.component.css']
})
export class MultiplicacionComponent {
  num1: number=0;
  num2: number=0;
  resultadoConcatenacion: string = '';
  resultadoSuma: number=0;

  calcular() {
    this.resultadoConcatenacion = '';
    this.resultadoSuma = 0;

    for (let i = 0; i < this.num1; i++) {
      this.resultadoSuma += this.num2;
      this.resultadoConcatenacion += this.num2.toString();  if (i < this.num1 - 1) {
        this.resultadoConcatenacion += ' + ';
      }
    }
  }
}

