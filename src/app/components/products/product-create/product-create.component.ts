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

  product: Product = {
    name: '',
    price: 0
  };

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createProduct(): void {
    if(this.product.name === '' || this.product.price === 0) {
      this.productsService.showMessage('Preencha todos os campos!');
      return;
    }
    this.productsService.createProduct(this.product).subscribe((value) => {
      console.log("-----------");
      console.log(value);
      console.log("-----------");
      this.productsService.showMessage('Produto criado com sucesso!');
      this.router.navigate(['/products']);
    });
  }

}
