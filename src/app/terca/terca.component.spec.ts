import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TercaComponent } from './terca.component';

describe('TercaComponent', () => {
  let component: TercaComponent;
  let fixture: ComponentFixture<TercaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TercaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TercaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
