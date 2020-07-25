import { Component, OnInit } from '@angular/core';
import { CardService } from '../services/card.service';

@Component({
  selector: 'my-domain-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(
    private cardService: CardService
  ) { }

  ngOnInit(): void {
    this.cardService.getApi().subscribe(res => {
      console.log(res);
    });
  }

}
