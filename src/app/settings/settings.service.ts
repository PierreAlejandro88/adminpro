import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private readonly defaultThemeUrl = 'assets/css/colors/default-dark.css';

  loadCurrentTheme(): void {
    const theme = localStorage.getItem('theme') || this.defaultThemeUrl;
    const linkTheme = this.getThemeLinkElement();

    if (linkTheme) {
      linkTheme.setAttribute('href', theme);
      localStorage.setItem('theme', theme);
      this.updateThemeSelectors();
    }
  }

  changeTheme(theme: string): void {
    const url = `assets/css/colors/${theme}.css`;
    const linkTheme = this.getThemeLinkElement();

    if (linkTheme) {
      linkTheme.setAttribute('href', url);
      localStorage.setItem('theme', url);
      this.updateThemeSelectors();
    } else {
      console.error('Theme link element not found');
    }
  }

  private updateThemeSelectors(): void {
    const links = document.querySelectorAll('.selector');
    const currentTheme = localStorage.getItem('theme');

    links.forEach(link => {
      link.classList.remove('working');
      const btnTheme = link.getAttribute('data-theme');
      const btnThemeUrl = `assets/css/colors/${btnTheme}.css`;

      if (btnThemeUrl === currentTheme) {
        link.classList.add('working');
      }
    });
  }

  private getThemeLinkElement(): HTMLLinkElement | null {
    return document.querySelector('#theme') as HTMLLinkElement;
  }
}
