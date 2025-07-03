// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-user-card',
//   standalone: true,
//   templateUrl: './user-card.html',
//   styleUrl: './user-card.css'
// })
// export class UserCardComponent {}
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css'
})
export class UserCardComponent {
  name: string = 'John Doe';
  title: string = 'Frontend Developer';
}
