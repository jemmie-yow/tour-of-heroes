import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {
      heroes: [
        { id: 12, name: 'Dr. Nice', clicks: 0 },
        { id: 13, name: 'Bombasto', clicks: 0 },
        { id: 14, name: 'Celeritas', clicks: 0 },
        { id: 15, name: 'Magneta', clicks: 0 },
        { id: 16, name: 'RubberMan', clicks: 0 },
        { id: 17, name: 'Dynama', clicks: 0 },
        { id: 18, name: 'Dr. IQ', clicks: 0 },
        { id: 19, name: 'Magma', clicks: 0 },
        { id: 20, name: 'Tornado', clicks: 0 },
      ],
    };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
