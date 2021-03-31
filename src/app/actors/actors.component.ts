import { Actor } from './../model/actor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css'],
})
export class ActorsComponent implements OnInit {
  listActors: Actor[] = [
    { lastName: 'Robert', firstName: 'Julia' },
    { lastName: 'Walker', firstName: 'Paul' },
    { lastName: 'Pitt', firstName: 'Brad' },
  ];
  listFavoris: Actor[] = [];
  constructor() {}

  ngOnInit(): void {}

  deleteActor(actor: Actor) {
    // find the index of the actor with name and last name
    const index = this.listActors.findIndex(
      (a) => a.firstName === actor.firstName && a.lastName === actor.lastName
    );
    this.listActors.splice(index, 1);
  }

  addOrRemove(actor: Actor) {
    // check if the actor exists or not
    const index = this.listFavoris.findIndex(
      (a) => a.firstName === actor.firstName && a.lastName === actor.lastName
    );
    if (index >= 0) this.listFavoris.splice(index, 1);
    else this.listFavoris.push(actor);
  }
}
