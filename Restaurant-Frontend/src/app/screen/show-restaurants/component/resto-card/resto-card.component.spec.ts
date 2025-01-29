import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestoCardComponent } from './resto-card.component';

describe('RestoCardComponent', () => {
  let component: RestoCardComponent;
  let fixture: ComponentFixture<RestoCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestoCardComponent]
    });
    fixture = TestBed.createComponent(RestoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
