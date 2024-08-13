import { Component, inject } from '@angular/core';
import { PersonalService } from '../../personal.service';
import { ProductosService } from '../../services/productos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ofertas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ofertas.component.html',
  styleUrl: './ofertas.component.css'
})
export class OfertasComponent {
servicio = inject(ProductosService)
producto:any
ngOnInit(){
  this.servicio.getProductos().subscribe(p => {
    this.producto= p
  })
}

  


}
