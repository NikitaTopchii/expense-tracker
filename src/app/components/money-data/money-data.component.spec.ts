import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyDataComponent } from './money-data.component';

describe('MoneyDataComponent', () => {
  let component: MoneyDataComponent;
  let fixture: ComponentFixture<MoneyDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoneyDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoneyDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
