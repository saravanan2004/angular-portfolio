import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="modal-overlay" (click)="close.emit()" @fade>
      <div class="modal-content" (click)="$event.stopPropagation()" @slideUp>
        <button class="close-btn" (click)="close.emit()">×</button>
        
        <div class="modal-grid">
          <div class="modal-image">
            <img [src]="project.image" [alt]="project.title">
          </div>
          
          <div class="modal-text">
            <h2 class="gradient-text">{{ project.title }}</h2>
            <div class="project-tags">
              <span class="tag" *ngFor="let tag of project.tags">{{ tag }}</span>
            </div>
            
            <p class="description">{{ project.description }}</p>
            
            <div class="technical-details">
              <h3>Technical Details</h3>
              <ul>
                <li *ngFor="let detail of project.details">{{ detail }}</li>
              </ul>
            </div>
            
            <div class="modal-actions">
              <a [href]="project.demo" class="btn btn-primary" target="_blank" *ngIf="project.demo !== '#'">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 8px;"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                Live Demo
              </a>
              <a [href]="project.github" class="btn btn-outline" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 8px;"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.85);
      backdrop-filter: blur(8px);
      z-index: 2000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
    }

    .modal-content {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 1.5rem;
      width: 100%;
      max-width: 1000px;
      max-height: 90vh;
      overflow-y: auto;
      position: relative;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    }

    .close-btn {
      position: absolute;
      top: 1.5rem;
      right: 1.5rem;
      background: var(--glass);
      border: 1px solid var(--border);
      color: var(--text-primary);
      width: 40px;
      height: 40px;
      border-radius: 50%;
      font-size: 1.5rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      z-index: 2;
    }

    .close-btn:hover {
      background: var(--error);
      color: white;
      transform: rotate(90deg);
    }

    .modal-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    .modal-image {
      height: 100%;
      min-height: 400px;
    }

    .modal-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .modal-text {
      padding: 3rem;
    }

    .modal-text h2 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    .project-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 2rem;
    }

    .tag {
      background: var(--primary);
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      font-size: 0.85rem;
      font-weight: 500;
    }

    .description {
      color: var(--text-secondary);
      font-size: 1.1rem;
      line-height: 1.8;
      margin-bottom: 2rem;
    }

    .technical-details {
      margin-bottom: 2rem;
    }

    .technical-details h3 {
      font-size: 1.2rem;
      margin-bottom: 1rem;
      color: var(--text-primary);
    }

    .technical-details ul {
      list-style: none;
      padding: 0;
    }

    .technical-details li {
      color: var(--text-secondary);
      margin-bottom: 0.5rem;
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .technical-details li::before {
      content: '⚡';
      font-size: 0.8rem;
    }

    .modal-actions {
      display: flex;
      gap: 1rem;
    }

    @media (max-width: 850px) {
      .modal-grid {
        grid-template-columns: 1fr;
      }
      
      .modal-image {
        min-height: 300px;
      }
      
      .modal-text {
        padding: 2rem;
      }
    }
  `],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0 }))
      ])
    ]),
    trigger('slideUp', [
      transition(':enter', [
        style({ transform: 'translateY(50px)', opacity: 0 }),
        animate('400ms cubic-bezier(0.4, 0, 0.2, 1)', style({ transform: 'translateY(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms cubic-bezier(0.4, 0, 0.2, 1)', style({ transform: 'translateY(50px)', opacity: 0 }))
      ])
    ])
  ]
})
export class ProjectModalComponent {
  @Input() project: any;
  @Output() close = new EventEmitter<void>();
}
