import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-zodiaco',
  templateUrl: './zodiaco.component.html',
  styleUrls: ['./zodiaco.component.css']
})
export class ZodiacoComponent implements OnInit {
  formulario!: FormGroup;
  edad: number | null = null;
  signoChino: string = '';
  signoImagen: string = '';
 
 
  signosChinosImagenes: { [key: string]: string } = {
    'Rata': 'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Rata-768x657-1.jpg',
    'Buey': 'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Buey-768x657-1.jpg',
    'Tigre': 'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Tigre-768x657-1.jpg',
    'Conejo': 'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Conejo-768x657-1.jpg',
    'Dragón': 'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Dragon-768x657-1.jpg',
    'Serpiente': 'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Serpiente-768x657-1.jpg',
    'Caballo': 'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Caballo-768x657-1.jpg',
    'Cabra': 'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Cabra-768x657-1.jpg',
    'Mono': 'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Mono-768x657-1.jpg',
    'Gallo': 'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Gallo-768x657-1.jpg',
    'Perro': 'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Perro-768x657-1.jpg',
    'Cerdo': 'https://ccl.uanl.mx/wp-content/uploads/2023/10/06_horoscopo_chino_Cerdo-768x657-1.jpg'
  };
  
 
  constructor() {}
 
  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apaterno: new FormControl('', Validators.required),
      amaterno: new FormControl('', Validators.required),
      dia: new FormControl('', [Validators.required, Validators.min(1), Validators.max(31)]),
      mes: new FormControl('', [Validators.required, Validators.min(1), Validators.max(12)]),
      anio: new FormControl('', [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]),
      sexo: new FormControl('', Validators.required)
    });
  }
 
  calcularEdad(): void {
    const dia = this.formulario.get('dia')?.value;
    const mes = this.formulario.get('mes')?.value;
    const anio = this.formulario.get('anio')?.value;
    if (dia && mes && anio) {
      const fechaNacimiento = new Date(anio, mes - 1, dia);
      const edadDifMs = Date.now() - fechaNacimiento.getTime();
      const edadFecha = new Date(edadDifMs);
      this.edad = Math.abs(edadFecha.getUTCFullYear() - 1970);
    }
  }
 
  obtenerSignoChino(): void {
    const anio = this.formulario.get('anio')?.value;
    if (anio) {
      const signosChinos = ['Rata', 'Buey', 'Tigre', 'Conejo', 'Dragón', 'Serpiente', 'Caballo', 'Cabra', 'Mono', 'Gallo', 'Perro', 'Cerdo'];
      this.signoChino = signosChinos[(anio - 4) % 12];
      this.signoImagen = this.signosChinosImagenes[this.signoChino]; 
    }
  }
 
  imprimir(): void {
    this.calcularEdad();
    this.obtenerSignoChino();
    console.log(`Hola ${this.formulario.get('nombre')?.value} ${this.formulario.get('apaterno')?.value} ${this.formulario.get('amaterno')?.value}`);
    console.log(`Tienes ${this.edad} años`);
    console.log(`Tu signo chino es ${this.signoChino}`);
  }
}