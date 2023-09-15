import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnwersComponent } from './anwers.component';

describe('AnwersComponent', () => {
  let component: AnwersComponent;
  let fixture: ComponentFixture<AnwersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnwersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnwersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
