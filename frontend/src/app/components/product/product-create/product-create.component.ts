import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  public product: Product = {
    name: '',
    price: null,
    quantity: 0
  }

  constructor(
    private productService: ProductService,
    private router: Router) { }

  public ngOnInit(): void {
  }

  public createProduct(): void {
    // chamada do service
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Operação executada com sucesso!')
      this.router.navigate(['/products'])
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
