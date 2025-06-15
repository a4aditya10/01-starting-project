import { Component } from "@angular/core";
@Component({
  selector: 'app-header',
  standalone: true, // False is default in versions less than 19 , other than that you donot need to mention it because it is by default set to true.
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent{}