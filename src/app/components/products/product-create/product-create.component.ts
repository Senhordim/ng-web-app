import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createProduct(): void {
    this.productsService.createProduct({
      name: 'Product 10',
      price: 10.58
    }).subscribe(() => {
      this.productsService.showMessage('Produto criado com sucesso!');
      this.router.navigate(['/products']);
    });
  }

}
