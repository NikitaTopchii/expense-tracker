import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyDataFormComponent } from './money-data-form.component';

describe('MoneyDataFormComponent', () => {
  let component: MoneyDataFormComponent;
  let fixture: ComponentFixture<MoneyDataFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoneyDataFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoneyDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
