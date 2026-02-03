import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3 class="gradient-text">Saravanan B</h3>
            <p>B.Tech IT Student passionate about web development, IoT systems, and data analytics.</p>
            <div class="social-links">
              <a *ngFor="let social of socialLinks" 
                 [href]="social.url" 
                 class="social-link" 
                 target="_blank"
                 [attr.aria-label]="social.name">
                <ng-container [ngSwitch]="social.name">
                  <svg *ngSwitchCase="'LinkedIn'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  <svg *ngSwitchCase="'GitHub'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  <svg *ngSwitchCase="'Email'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  <span *ngSwitchDefault>{{ social.icon }}</span>
                </ng-container>
              </a>
            </div>
          </div>
          
          <div class="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#">Web Development</a></li>
              <li><a href="#">IoT Solutions</a></li>
              <li><a href="#">Data Analytics</a></li>
              <li><a href="#">Technical Training</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4>Contact Info</h4>
            <div class="contact-info">
              <p>📧 saravananb7804&#64;gmail.com</p>
              <p>📱 +91 9361409583</p>
              <p>📍 Tiruchendur, Tamil Nadu</p>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; {{ currentYear }} Saravanan B. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: var(--surface);
      border-top: 1px solid var(--border);
      padding: 3rem 0 1rem;
    }
    
    .footer-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-bottom: 2rem;
    }
    
    .footer-section h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    
    .footer-section h4 {
      font-size: 1.1rem;
      margin-bottom: 1rem;
      color: var(--primary);
    }
    
    .footer-section p {
      color: var(--text-secondary);
      line-height: 1.6;
      margin-bottom: 1rem;
    }
    
    .footer-section ul {
      list-style: none;
    }
    
    .footer-section ul li {
      margin-bottom: 0.5rem;
    }
    
    .footer-section ul li a {
      color: var(--text-secondary);
      text-decoration: none;
      transition: color 0.3s ease;
    }
    
    .footer-section ul li a:hover {
      color: var(--primary);
    }
    
    .social-links {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
    }
    
    .social-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background: var(--glass);
      border-radius: 50%;
      border: 1px solid var(--border);
      text-decoration: none;
      font-size: 1.2rem;
      transition: all 0.3s ease;
    }
    
    .social-link:hover {
      background: var(--primary);
      transform: translateY(-2px);
    }
    
    .contact-info p {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 0.5rem;
    }
    
    .footer-bottom {
      border-top: 1px solid var(--border);
      padding-top: 2rem;
      text-align: center;
      color: var(--text-secondary);
    }
    
    .footer-bottom p {
      margin-bottom: 0.5rem;
    }
    
    @media (max-width: 768px) {
      .footer-content {
        grid-template-columns: 1fr;
        text-align: center;
      }
      
      .social-links {
        justify-content: center;
      }
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  socialLinks = [
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/saravanan-btechit' },
    { name: 'GitHub', icon: '🐙', url: 'https://github.com/saravanan2004' },
    { name: 'Email', icon: '📧', url: 'mailto:saravananb7804@gmail.com' },
    { name: 'Education', icon: '🎓', url: '#' }
  ];
}