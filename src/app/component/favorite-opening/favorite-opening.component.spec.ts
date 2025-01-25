import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteOpeningComponent } from './favorite-opening.component';

describe('FavoriteOpeningComponent', () => {
  let component: FavoriteOpeningComponent;
  let fixture: ComponentFixture<FavoriteOpeningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriteOpeningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FavoriteOpeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
