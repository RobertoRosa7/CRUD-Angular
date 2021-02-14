import { Product } from './../../product/product.model';
import { ProductService } from './../../product/product.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {
  public products: Product[] = []
  public product: Product
  public product_select: string
  public form: FormGroup

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.productService.read().subscribe(products => products ? this.products = products : this.products = [])
    this.initializeForm()
  }

  public initializeForm(): void {
    this.form = this.formBuilder.group({
      name: [''],
      price: [''],
      quantity: [''],
    })
  }

  public changeProduct(event: MatSelectChange): void {
    this.product_select = event.value.name
    this.form.patchValue(event.value)
  }
}
