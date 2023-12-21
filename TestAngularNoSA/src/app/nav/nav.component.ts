import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  data="Testojme";
  source: string ="/assets/image.png";
  check=true;
  searchValue="";
  update(eventData: any){
    this.searchValue=eventData.target.value;
  }
}
