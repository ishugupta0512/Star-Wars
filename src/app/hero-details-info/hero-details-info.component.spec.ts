import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailsInfoComponent } from './hero-details-info.component';

describe('HeroDetailsInfoComponent', () => {
  let component: HeroDetailsInfoComponent;
  let fixture: ComponentFixture<HeroDetailsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroDetailsInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroDetailsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
