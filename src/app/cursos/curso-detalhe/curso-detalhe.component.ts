import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  standalone: true,
  imports: [],
  templateUrl: './curso-detalhe.component.html',
  styleUrl: './curso-detalhe.component.scss',
})
export class CursoDetalheComponent {
  id: string = '';
  inscricao: Subscription = new Subscription();
  curso: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cursosService: CursosService
  ) {}

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => (this.id = params['id'])
    );
    this.curso = this.cursosService.getCurso(Number(this.id));

    if (this.curso == null) {
      this.router.navigate(['/404']);
    }
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }
}
