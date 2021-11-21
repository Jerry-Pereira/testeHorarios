import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuintaComponent } from './quinta.component';

describe('QuintaComponent', () => {
  let component: QuintaComponent;
  let fixture: ComponentFixture<QuintaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuintaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuintaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
