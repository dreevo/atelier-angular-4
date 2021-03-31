import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertisseur',
  templateUrl: './convertisseur.component.html',
  styleUrls: ['./convertisseur.component.css'],
})
export class ConvertisseurComponent implements OnInit {
  montant: number;
  constructor() {}

  ngOnInit(): void {}

  changeInput(newVal: number) {
    console.log(newVal);
  }
}
