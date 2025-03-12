import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .pipe(
        // sort by clicks
        map((heroes) => heroes.sort((a, b) => b.clicks - a.clicks)),
        // take the first 4
        map((heroes) => heroes.slice(0, 4))
      )
      .subscribe((heroes) => (this.heroes = heroes));
  }
}
