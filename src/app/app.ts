import {Component} from '@angular/core';
import {HeaderComponent} from "./header/header";


@Component({
  selector: 'app-root',
    imports: [

        HeaderComponent
    ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
