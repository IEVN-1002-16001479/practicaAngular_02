import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {
  nombre: string = '';
  mostrarNombre: string = '';
  totalBoletas: number = 0;
  mostrarBoleto:number=0;
  totalCabezas:number=0;
  tieneTarjeta: string = 'NO';
  descuento: number = 0;
  descuentoTarjeta: number = 0;
  descuentoCalculado: boolean = false;
  precioPorBoleta: number = 12;
  precioTotal:number=0;
  precioTotalF:number=0;
  precioTotalF2:number=0;
  descuentoTotal:number=0;
  descuentoTotal2:number=0;
  mensaje:string='';



  entradas() {
    this.mostrarNombre=this.nombre;
    this.mostrarBoleto=this.totalBoletas;
    this.mensaje='';
    this.totalBoletas<=this.totalCabezas*7;
    if (this.totalBoletas >= 5 && (this.totalBoletas<=(this.totalCabezas*7))&& (this.totalBoletas>0))  {
      this.descuento = 15;
      
    } else if (this.totalBoletas >= 3 && (this.totalBoletas<=(this.totalCabezas*7))&& (this.totalBoletas>0)) {
      this.descuento = 10;
    } else {
      this.descuento = 0;
    }

    if (this.tieneTarjeta == 'si'&& (this.totalBoletas<=(this.totalCabezas*7))&& (this.totalBoletas>0) ) {
      this.descuentoTarjeta = 10;
    } else {
      this.descuentoTarjeta = 0;
    }
    if (this.totalBoletas>(this.totalCabezas*7)){
      this.totalBoletas=0;
      this.precioTotalF2=0 ;
      this.mensaje ='ERROR DE COMPRA'
    }

    if (this.totalBoletas <=0){
      this.totalBoletas=0;
      this.precioTotalF2=0 ;
      this.mensaje ='ERROR DE COMPRA'
    }
   
    else { this.descuentoCalculado = true;
    }
    this.precioTotal = this.totalBoletas * this.precioPorBoleta;
     
    this.descuentoTotal = this.precioTotal * (this.descuento / 100);
    this.precioTotalF= this.precioTotal - this.descuentoTotal;

    this.descuentoTotal2=this.precioTotalF * (this.descuentoTarjeta / 100);
    this.precioTotalF2= this.precioTotalF - this.descuentoTotal2;
  }

  
  salir() {
    window.location.reload(); 
  }
}