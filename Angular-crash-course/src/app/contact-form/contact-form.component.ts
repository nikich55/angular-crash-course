import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})

export class ContactFormComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  submittedNames: string[] = [];

  onSubmit() {
    if (this.name.trim()) {
      this.submittedNames.push(this.name.trim());
    }

    alert(`Message sent!\nName: ${this.name}\nEmail: ${this.email}\nMessage: ${this.message}`);
    this.name = '';
    this.email = '';
    this.message = '';
  }
}

