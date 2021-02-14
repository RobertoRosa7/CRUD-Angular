import { Product } from './../../product/product.model';
import { ProductService } from './../../product/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {
  public products: Product[]
  public product: Product


  constructor(private productService: ProductService) { }

  public ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
    })
  }

}
