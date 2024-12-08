import { Component, inject, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AddMoneyService } from '../../services/add-money.service';

@Component({
  selector: 'app-money-data-form',
  standalone: false,
  
  templateUrl: './money-data-form.component.html',
  styleUrl: './money-data-form.component.scss'
})
export class MoneyDataFormComponent {

  @Input() formTypeTitle: string = '';

  addMoneyService = inject(AddMoneyService);

  private moneyDataForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.moneyDataForm = this.fb.group({
      moneyDataTitle: [''],
      amountOfMoney: ['']
    })
  }

  getMoneyDataForm(): FormGroup {
    return this.moneyDataForm;
  }

  sendData(){
    const data = this.moneyDataForm.value;

    this.addMoneyService.addExpense(data.moneyDataTitle, parseInt(data.amountOfMoney), 'rent', '#FF6384');

    this.addMoneyService.sendData();
  }
}
