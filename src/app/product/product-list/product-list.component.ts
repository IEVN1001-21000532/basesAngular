import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  imageWidth:number=50;
  imageMargin:number=2;
  muestraImg:boolean=true;
  mostarImagen():void{
    this.muestraImg=!this.muestraImg
  }

  productos:any[]=[
    {
      "ProductoId":1,
      "Modelo":"sentra",
      "Descripcion":"2 puertas",
      "Year":"febrero 2 2023",
      "Precio":20000,
      "Color":"azul",
      "Marca":"audi",
      "ImagenUrl":"https://th.bing.com/th/id/OIP.AdEsTj8zQ5mzXdBPNetBtgHaEo?rs=1&pid=ImgDetMain"
    },
    {
      "ProductoId":2,
      "Modelo":"A4",
      "Descripcion":"4 puertas",
      "Year":"Noviembre 2 2023",
      "Precio":100000,
      "Color":"morado",
      "Marca":"tesla",
      "ImagenUrl":"https://media.gq.com.mx/photos/5d6ec5c43d0c810008e7008c/16:9/w_1600,c_limit/bugatti.jpg"
    },
    {
      "ProductoId":3,
      "Modelo":"rio",
      "Descripcion":"2 puertas",
      "Year":"Marzo 2 2023",
      "Precio":30000,
      "Color":"rosa",
      "Marca":"mercedes",
      "ImagenUrl":"https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2022/08/7-mejores-coches-espanoles-jamas-fabricados-historia-2774201.jpg?tf=1200x"
    }
  ]
}
