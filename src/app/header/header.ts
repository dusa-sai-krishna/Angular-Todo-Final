import {Component, inject} from '@angular/core';
import {ThemeService} from "../../theme/theme.service";
import {Button} from "primeng/button";

@Component({
  selector: 'app-header',
  imports: [
    Button
  ],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
  private _themeService = inject(ThemeService)
  public theme = this._themeService.theme;

  onToggleTheme() {
    this._themeService.toggleDarkMode();
  }
}
