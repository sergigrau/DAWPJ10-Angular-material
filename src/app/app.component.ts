import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';


@Component({
  selector: 'aplicacio',
  standalone: true,
  imports: [RouterModule],
  template: `
  
      <h1> menu </h1>
    <nav>
      <a routerLink="/m01">M01 Salutacio</a>
      <a routerLink="/m02">M02 Suma</a>
      <a routerLink="/pipes">Pipes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular18';
}
