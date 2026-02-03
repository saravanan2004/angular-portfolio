import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="contact">
      <div class="container">
        <div class="section-header" *ngIf="isVisible" @fadeInUp>
          <h2 class="section-title">Get In <span class="gradient-text">Touch</span></h2>
          <p class="section-subtitle">Let's work together on your next project</p>
        </div>
        
        <div class="contact-content">
          <div class="contact-info" *ngIf="isVisible" @fadeInUp>
            <h3>Let's Connect</h3>
            <p>
              I'm always interested in hearing about new opportunities and projects. 
              Whether you're a company looking to hire, or you're someone with an interesting project, 
              I'd love to hear from you.
            </p>
            
            <div class="contact-items">
              <div class="contact-item" *ngFor="let item of contactInfo">
                <div class="contact-icon">{{ item.icon }}</div>
                <div class="contact-details">
                  <div class="contact-label">{{ item.label }}</div>
                  <div class="contact-value">{{ item.value }}</div>
                </div>
              </div>
            </div>
            
            <div class="social-links">
              <a *ngFor="let social of socialLinks" 
                 [href]="social.url" 
                 class="social-link" 
                 target="_blank"
                 [attr.aria-label]="social.name">
                <span class="social-icon">
                  <ng-container [ngSwitch]="social.name">
                    <svg *ngSwitchCase="'LinkedIn'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    <svg *ngSwitchCase="'GitHub'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <svg *ngSwitchCase="'Email'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    <span *ngSwitchDefault>{{ social.icon }}</span>
                  </ng-container>
                </span>
                <span>{{ social.name }}</span>
              </a>
            </div>
          </div>
          
          <form class="contact-form" *ngIf="isVisible" @fadeInUp 
      (ngSubmit)="onSubmit()" #contactForm="ngForm">
  
  <div class="form-group">
    <input type="text" id="name" name="name"
           [(ngModel)]="formData.name"
           required
           class="form-input"
           [class.filled]="formData.name">
    <label for="name">Name</label>
  </div>

  <div class="form-group">
    <input type="email" id="email" name="email"
           [(ngModel)]="formData.email"
           required
           class="form-input"
           [class.filled]="formData.email">
    <label for="email">Email</label>
  </div>

  <div class="form-group">
    <input type="text" id="subject" name="subject"
           [(ngModel)]="formData.subject"
           required
           class="form-input"
           [class.filled]="formData.subject">
    <label for="subject">Subject</label>
  </div>

  <div class="form-group">
    <textarea id="message" name="message"
              [(ngModel)]="formData.message"
              required
              rows="5"
              class="form-input"
              [class.filled]="formData.message"></textarea>
    <label for="message">Message</label>
  </div>

  <button type="submit" class="btn btn-primary" [disabled]="!contactForm.valid">
    {{ isSubmitting ? 'Sending...' : 'Send Message' }}
    <span class="icon">✈️</span>
  </button>
</form>

        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact {
      padding: 6rem 0;
      background: var(--background);
    }

    .section-header {
      text-align: center;
      margin-bottom: 4rem;
    }

    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    .section-subtitle {
      color: var(--text-secondary);
      font-size: 1.1rem;
    }

    .contact-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: start;
    }

    .contact-info h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    .contact-info p {
      color: var(--text-secondary);
      line-height: 1.7;
      margin-bottom: 2rem;
    }

    .contact-items {
      margin-bottom: 2rem;
    }

    .contact-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1.5rem;
      padding: 1rem;
      background: var(--glass);
      border-radius: 0.5rem;
      border: 1px solid var(--border);
      transition: transform 0.3s ease;
    }

    .contact-item:hover {
      transform: translateX(5px);
    }

    .contact-icon {
      font-size: 1.5rem;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--primary);
      border-radius: 50%;
    }

    .contact-label {
      font-weight: 500;
      margin-bottom: 0.25rem;
    }

    .contact-value {
      color: var(--text-secondary);
    }

    .social-links {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .social-link {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1rem;
      background: var(--glass);
      border-radius: 0.5rem;
      border: 1px solid var(--border);
      text-decoration: none;
      color: var(--text-primary);
      transition: all 0.3s ease;
    }

    .social-link:hover {
      background: var(--primary);
      color: white;
      transform: translateY(-2px);
    }

    .contact-form {
      background: var(--glass);
      padding: 2rem;
      border-radius: 1rem;
      border: 1px solid var(--border);
      backdrop-filter: blur(10px);
    }

    .form-group {
  position: relative;
  margin-bottom: 1.5rem;
}

/* Label base style */
.form-group label {
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
  color: var(--text-secondary);
  font-weight: 500;
  font-size: 1rem;
  pointer-events: none;
  background: var(--surface);
  padding: 0 0.5rem;
  transition: all 0.3s ease;
  opacity: 0.9;
  z-index: 1;
}

/* Special case for textarea */
.form-group label[for="message"] {
  top: 1rem;
  transform: none;
}

/* Floating label behavior on focus or when filled */
.form-group:focus-within label,
.form-input.filled + label {
  top: -0.6rem;
  left: 0.75rem;
  font-size: 0.75rem;
  color: var(--primary);
  opacity: 1;
  z-index: 2;
}

/* Input field styling */
.form-input {
  width: 100%;
  padding: 1rem;
  border: 2px solid var(--border);
  border-radius: 0.5rem;
  background: var(--surface);
  color: var(--text-primary);
  font-family: inherit;
  font-size: 1rem;
  transition: all 0.3s ease;
  z-index: 0;
}

/* On focus */
.form-input:focus {
  outline: none;
  border-color: var(--primary);
  background: var(--surface);
}

/* When input is manually filled (detected by [class.filled]) */
.form-input.filled {
  border-color: var(--primary);
}


    button[type="submit"] {
      width: 100%;
      justify-content: center;
    }

    button:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    @media (max-width: 768px) {
      .contact-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .social-links {
        justify-content: center;
      }

      .section-title {
        font-size: 2rem;
      }
    }
  `],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ContactComponent implements OnInit, AfterViewInit {
  isVisible: boolean = false;
  isSubmitting: boolean = false;

  constructor(private el: ElementRef) { }

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'saravananb7804@gmail.com'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+91 9361409583'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Tuticorin, Tamil Nadu'
    }
  ];

  socialLinks = [
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://linkedin.com/in/saravanan-btechit'
    },
    {
      name: 'GitHub',
      icon: '🐙',
      url: 'https://github.com/saravanan2004'
    },
    {
      name: 'Email',
      icon: '📧',
      url: 'mailto:saravananb7804@gmail.com'
    }
  ];

  ngOnInit() { }

  ngAfterViewInit() {
    this.setupIntersectionObserver();
  }

  setupIntersectionObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.isVisible = true;
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );

    const section = this.el.nativeElement.querySelector('#contact');
    if (section) {
      observer.observe(section);
    }
  }

  onSubmit() {
    this.isSubmitting = true;

    setTimeout(() => {
      this.isSubmitting = false;
      alert('Message sent successfully!');
      this.resetForm();
    }, 2000);
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}
