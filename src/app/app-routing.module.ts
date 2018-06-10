import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { NewProductComponent } from './new-product/new-product.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "products",
    pathMatch: "full"
  },
  {
    path: "products",
    component: ProductListComponent,
    pathMatch: "full"
  },
  {
    path: "products/new",
    component: NewProductComponent,
    pathMatch: "full"
  },
  {
    path: "products/:id",
    component: ProductComponent
  },
  {
    path: "products/:id/edit",
    component: UpdateProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
