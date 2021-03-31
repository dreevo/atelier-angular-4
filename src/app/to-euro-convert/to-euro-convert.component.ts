import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-to-euro-convert',
  templateUrl: './to-euro-convert.component.html',
  styleUrls: ['./to-euro-convert.component.css'],
})
export class ToEuroConvertComponent implements OnInit, OnChanges {
  @Input() montant: number;
  @Output() onConvert = new EventEmitter<number>();
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    this.montant *= 0.31;
    this.onConvert.emit(this.montant);
  }

  ngOnInit(): void {}
}
