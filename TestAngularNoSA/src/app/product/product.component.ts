import { Component , OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {


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

pName :string="";
pPrice:string="";
sendData(){
  console.log(this.pName);
  const p={
    name:this.pName,
    price:this.pPrice
  }
  this.addProduct(p);
}

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
async addProduct(productData: any) {
  try {
    const res = await this.http.post<any>("http://localhost:8080/products", productData).toPromise();
    if (res) {
      console.log('Product added successfully:', res);
    } else {
      console.error('Response is undefined.');
    }
  } catch (err) {
    console.error('Error adding product:', err);
  }
}



}
