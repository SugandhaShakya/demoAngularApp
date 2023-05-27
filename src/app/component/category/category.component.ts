import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
// import { CategoryService } from 'src/app/services/category.service';
import { EShopService } from 'src/app/services/e-shop.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {


  categories:Array<Category>=new Array<Category>();
  error!:string;

  constructor(private categoryServices:EShopService){}

  ngOnInit(): void {
    this.categoryServices.getAll().subscribe((responce:any)=>{
      this.categories= responce;
    },
    error=>{
      console.error(error);
      this.error='could not load Category'
    })
  }
}
