import { Component, Input, OnInit } from '@angular/core';
import { ArtObjet } from 'src/app/interfaces/ArtObjet';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent  {

  @Input() artObjet! : ArtObjet;

  constructor() { }


}
