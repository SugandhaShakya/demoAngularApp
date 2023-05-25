import { Component, OnInit } from '@angular/core';
import { Shop } from 'src/app/model/shop';
// import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  shops: Array<Shop> = new Array<Shop>();
  selectedShop!:Shop | null;
  viewingShop!:Shop;

  ngOnInit(): void {

    for (let i = 0; i < 10; i++) {
      const shop = new Shop();
      shop.id = i;
      shop.name = `Shop ${i+1}`;
      shop.description =
        ' This is shop. This is shop. This is shop. This is shop. This is shop ';
      shop.location = `Location: ${i+1}`;
      shop.openingDate = new Date();
      this.shops.push(shop);
    }
  }

  public viewDetail(shopId: number):void{
    this.selectedShop = this.shops[shopId];
  }
  public hideRespond($event:boolean):void{
    if($event){
      this.selectedShop=null;
    }
  }
}
