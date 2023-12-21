import { Component , OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {


  products=[
    {
      name:"Kafe",
      price:'100'
    },
    {
      name:'Makiato',
      price:'120'
    }
  ];


//Marrim data nga backendi
//Mos harro importin;
data: any[] = []; // Assuming products is an array

constructor(private http: HttpClient) {}

ngOnInit(): void {
  this.getProducts();
}

async getProducts() {
  try {
    const res = await this.http.get<any[]>("http://localhost:8080/products").toPromise();
    if (res) {
      if (Array.isArray(res)) {
        this.data = res;
      } else if (typeof res === 'object' && res !== null) {
        this.data = [res, ...this.data];
      }
      console.log(this.data);
    } else {
      console.error('Response is undefined.');
    }
  } catch (err) {
    console.error(err);
  }
}
}
