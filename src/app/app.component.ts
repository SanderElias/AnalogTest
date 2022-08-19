import { DOCUMENT } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
   <header><nav>
      <a routerLink="/home">Home</a>
      <a routerLink="/about">About</a>
      <span (click)=themeChange()>{{theme==='dark'? '☀️': '🌕️'}}</span>
   </nav></header>
   <main>
      <router-outlet></router-outlet>
   </main>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
      }
      header {
        flex: 0 0 auto;
        height: 3ch;
        background-color: var(--surface4);
      }
      main {
        flex: 1 1 auto;
        min-height: calc(100vh - 3ch);
      }
      nav a {
        text-decoration: none;
        color: var(--on-surface4);
      }
    `,
  ],
})
export class AppComponent {
  theme: 'ligth'|'dark' = 'dark';
  doc = inject(DOCUMENT)

  themeChange() {
    this.theme = this.theme === 'dark' ? 'ligth' : 'dark';
    const html = this.doc.documentElement;
    html.setAttribute('color-scheme', this.theme);
    console.log(this.doc.documentElement)

  }

}
