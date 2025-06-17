import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-card',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})

export class ProfileCardComponent {
  name: string = 'Ivan Petrov';
  @Input() job: string = 'Frontend Developer';
  @Input() description: string = 'Enjoyer of good coffee and HTML.';
  @Input() imageSrc: string = '';

   giveKudos() {
    alert('Kudos!');
  }
}