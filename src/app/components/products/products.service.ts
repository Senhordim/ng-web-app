import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from './models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseUrl = 'http://localhost:3000/products';

  constructor(
    private snackBar: MatSnackBar,
    private httpClient: HttpClient
  ) { }

  showMessage(message: string): void {
    this.snackBar.open(message, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  createProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(`${this.baseUrl}`, product);
  }
}
