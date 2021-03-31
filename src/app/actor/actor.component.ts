import { Actor } from './../model/actor';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css'],
})
export class ActorComponent implements OnInit {
  @Input() actor: Actor;
  @Output() onDelete = new EventEmitter<Actor>();
  @Output() onAddOrRemove = new EventEmitter<Actor>();
  constructor() {}

  ngOnInit(): void {}

  delete(actor: Actor) {
    this.onDelete.emit(actor);
  }

  addOrRemove(actor: Actor) {
    this.onAddOrRemove.emit(actor);
  }
}
