import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css'],
})
export class FilsComponent implements OnInit {
  @Input() color: string;
  @Output() onReset = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}

  reset() {
    this.color = 'white';
    this.onReset.emit(true);
  }
}
