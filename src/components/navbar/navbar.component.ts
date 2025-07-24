import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="navbar" [class.scrolled]="isScrolled()">
      <div class="container">
        <div class="nav-content">
          <a href="#home" class="logo">
            <span class="gradient-text">Saravanan B</span>
          </a>
          
          <div class="nav-links" [class.active]="isMenuOpen()">
            <a href="#home" (click)="closeMenu()" class="nav-link">Home</a>
            <a href="#about" (click)="closeMenu()" class="nav-link">About</a>
            <a href="#skills" (click)="closeMenu()" class="nav-link">Skills</a>
            <a href="#projects" (click)="closeMenu()" class="nav-link">Projects</a>
            <a href="#contact" (click)="closeMenu()" class="nav-link">Contact</a>
          </div>
          
          <div class="nav-actions">
            <button class="theme-toggle" (click)="toggleTheme()">
              <span class="icon">{{ isDarkTheme() ? '☀️' : '🌙' }}</span>
            </button>
            <button class="menu-toggle" (click)="toggleMenu()">
              <span class="hamburger" [class.active]="isMenuOpen()"></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      background: transparent;
      backdrop-filter: blur(10px);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      padding: 1rem 0;
    }
    
    .navbar.scrolled {
      background: var(--glass);
      border-bottom: 1px solid var(--border);
      padding: 0.75rem 0;
    }
    
    .nav-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    
    .logo {
      font-size: 1.5rem;
      font-weight: 700;
      text-decoration: none;
      transition: transform 0.3s ease;
    }
    
    .logo:hover {
      transform: scale(1.05);
    }
    
    .nav-links {
      display: flex;
      gap: 2rem;
      align-items: center;
    }
    
    .nav-link {
      color: var(--text-secondary);
      text-decoration: none;
      font-weight: 500;
      transition: all 0.3s ease;
      position: relative;
    }
    
    .nav-link:hover {
      color: var(--primary);
    }
    
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      transition: width 0.3s ease;
    }
    
    .nav-link:hover::after {
      width: 100%;
    }
    
    .nav-actions {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    
    .theme-toggle {
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.5rem;
      border-radius: 50%;
      transition: all 0.3s ease;
      background: var(--glass);
    }
    
    .theme-toggle:hover {
      transform: scale(1.1);
      background: var(--primary);
    }
    
    .icon {
      font-size: 1.2rem;
    }
    
    .menu-toggle {
      display: none;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.5rem;
    }
    
    .hamburger {
      display: block;
      width: 24px;
      height: 3px;
      background: var(--text-primary);
      position: relative;
      transition: all 0.3s ease;
    }
    
    .hamburger::before,
    .hamburger::after {
      content: '';
      position: absolute;
      width: 24px;
      height: 3px;
      background: var(--text-primary);
      transition: all 0.3s ease;
    }
    
    .hamburger::before {
      top: -8px;
    }
    
    .hamburger::after {
      bottom: -8px;
    }
    
    .hamburger.active {
      background: transparent;
    }
    
    .hamburger.active::before {
      transform: rotate(45deg);
      top: 0;
    }
    
    .hamburger.active::after {
      transform: rotate(-45deg);
      bottom: 0;
    }
    
    @media (max-width: 768px) {
      .nav-links {
        position: fixed;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--surface);
        flex-direction: column;
        padding: 2rem;
        transform: translateY(-100%);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        border-top: 1px solid var(--border);
      }
      
      .nav-links.active {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
      }
      
      .menu-toggle {
        display: block;
      }
    }
  `]
})
export class NavbarComponent implements OnInit, OnDestroy {
  isScrolled = signal(false);
  isMenuOpen = signal(false);
  isDarkTheme = signal(true);

  ngOnInit() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
    this.loadTheme();
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll() {
    this.isScrolled.set(window.scrollY > 100);
  }

  toggleMenu() {
    this.isMenuOpen.update(value => !value);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }

  toggleTheme() {
    this.isDarkTheme.update(value => !value);
    const theme = this.isDarkTheme() ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  loadTheme() {
    const saved = localStorage.getItem('theme');
    if (saved) {
      this.isDarkTheme.set(saved === 'dark');
      document.documentElement.setAttribute('data-theme', saved);
    }
  }
}