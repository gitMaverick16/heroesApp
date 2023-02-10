import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
  .heroe-container{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .heroe-part{
    margin: 10px;
  }
  .heroe-part img{
    height: 550px;
    border-radius: 5px;
  }
  `]
})
export class HeroeComponent implements OnInit {
  heroe! : Heroe;

  constructor(private activatedRoute : ActivatedRoute,
    private heroesService: HeroesService,
    private router: Router){
  }

  ngOnInit(): void{
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.heroesService.getHeroePorId(id))
    )
    .subscribe(heroe => this.heroe = heroe);
  }

  regresar(){
    this.router.navigate(['/heroe/listado'])
  }
}
