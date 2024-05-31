import { Component } from '@angular/core';
import { LabelComponent } from './label.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [LabelComponent],
})
export class AppComponent {
  title = 'component-theming';
}
