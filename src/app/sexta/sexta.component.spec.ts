import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SextaComponent } from './sexta.component';

describe('SextaComponent', () => {
  let component: SextaComponent;
  let fixture: ComponentFixture<SextaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SextaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SextaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
