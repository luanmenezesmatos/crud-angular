import { Component } from '@angular/core';
import { CursosService } from './cursos.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss',
})
export class CursosComponent {
  cursos: any[] = [];
  pagina: number = 0;
  inscricao: Subscription = new Subscription();

  constructor(
    private CursosService: CursosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cursos = this.CursosService.getCursos();

    this.inscricao = this.route.queryParams.subscribe((queryParams) => {
      this.pagina = queryParams['pagina'];
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  proximaPagina() {
    this.pagina++;
    this.router.navigate(['/cursos'], { queryParams: { pagina: this.pagina } });
  }
}
