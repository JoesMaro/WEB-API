import { Component, inject } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  servicio = inject(ProductsService);

  id: any;
  nombre: any;
  categoria: any;
  precio: any;
  descripcion: any;

  guardar(data: any) {
    console.log(data.value);
    this.servicio.postProducto(data.value).subscribe(
      response => {
        console.log('Producto guardado con éxito', response);
      },
      error => {
        console.error('Error al guardar el producto', error);
      }
    );
  }
}
