import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Shop } from 'src/app/model/shop';

@Component({
  selector: 'app-about-detail',
  templateUrl: './about-detail.component.html',
  styleUrls: ['./about-detail.component.css']
})
export class AboutDetailComponent {
  @Input() selectedShop!: Shop;
  @Output() hideEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  public hide(){
    this.hideEmitter.emit(true);
  }
}
