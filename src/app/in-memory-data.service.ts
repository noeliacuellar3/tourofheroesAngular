import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Bolivia' },
      { id: 13, name: 'Brasil' },
      { id: 14, name: 'Colombia' },
      { id: 15, name: 'Paraguay' },
      { id: 16, name: 'México' },
      { id: 17, name: 'Argentina' },
      { id: 18, name: 'Ecuador' },
      { id: 19, name: 'Perú' },
      { id: 20, name: 'Venezuela' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}