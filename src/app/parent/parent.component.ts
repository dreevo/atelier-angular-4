import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  color: string;
  @ViewChild('couleur') input: ElementRef;
  constructor() {}

  ngOnInit(): void {}

  changeColor(color: string) {
    var s = new Option().style;
    s.color = color;
    if (s.color === color) {
      this.color = color;
      console.log(this.color);
    }
  }

  reset(val: boolean) {
    if (val) this.input.nativeElement.value = '';
  }
}
