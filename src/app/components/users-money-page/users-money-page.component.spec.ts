import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersMoneyPageComponent } from './users-money-page.component';

describe('UsersMoneyPageComponent', () => {
  let component: UsersMoneyPageComponent;
  let fixture: ComponentFixture<UsersMoneyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersMoneyPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersMoneyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
