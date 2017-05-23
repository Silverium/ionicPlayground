import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };


  constructor(public http: Http) {
    let items = [
      {
        "name": "Alex Arévalo",
        "profilePic": "assets/img/speakers/bear.jpg",
        "about": "Alex is a 2rismapper Bear."
      },
      {
        "name": "Monika Szymañska",
        "profilePic": "assets/img/speakers/cheetah.jpg",
        "about": "Monika is a Cheetah."
      },
      {
        "name": "Kelly Max",
        "profilePic": "assets/img/speakers/duck.jpg",
        "about": "Kelly is a Duck."
      },
      {
        "name": "Gudrun Vogel",
        "profilePic": "assets/img/speakers/eagle.jpg",
        "about": "Godrun is an Eagle (She has to be a bird!!)."
      },
      {
        "name": "George Tsopouridis",
        "profilePic": "assets/img/speakers/elephant.jpg",
        "about": "George is an Elephant."
      },
      {
        "name": "Víctor Gonzalez",
        "profilePic": "assets/img/speakers/mouse.jpg",
        "about": "Victor is a Mouse."
      },
      {
        "name": "Joan Sentis",
        "profilePic": "assets/img/speakers/lion.jpg",
        "about": "Joan is a 2rismapper Lion."
      
      },
      {
        "name": "Soldeplata Saketos",
        "profilePic": "assets/img/advance-card-tmntr.jpg",
        "about": "Solde is a 2rismapper Terminator. \
        Solde is always proud of being a person that's able \
        to optimize his way of thinking, who doesn't care about \
        copying the job of the greatest programmers and most of all, \
        Soldeplata likes to be always with a smile in his mind... if \
        you are lucky to be around, Soldeplata will force you a smile in \
        your soul and in your face. Soldeplata is a great deal for you."
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
