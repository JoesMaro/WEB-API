import { Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { ProductosComponent } from './screens/productos/productos.component';
import { OfertasComponent } from './screens/ofertas/ofertas.component';
import { ContactosComponent } from './screens/contactos/contactos.component';
import { TerminosComponent } from './screens/terminos/terminos.component';

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "productos", component: ProductosComponent },
  { path: "ofertas", component: OfertasComponent },
  { path: "terminos", component: TerminosComponent },
  { path: "contactos", component: ContactosComponent },
  { path: "**", redirectTo: "", pathMatch: "full" },
 

  // Corregido el espacio extra
];
