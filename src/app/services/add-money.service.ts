import { Injectable } from '@angular/core';
import { User } from '../data/user';

@Injectable({
  providedIn: 'root'
})
export class AddMoneyService {

  private usersData: User = {
    expensesData: [],
    incomesData: []
  };

  constructor() { 
    this.updateUsersData();
  }

  updateUsersData(){
    const data = localStorage.getItem('usersMoney');

    if(data){
      this.usersData = JSON.parse(data);
    } else {
      return;
    }
  } 

  getUsersData(){
    return this.usersData;
  }

  getUsersExpenseData(){
    return this.usersData.expensesData;
  }

  getUsersIncomesData(){
    return this.usersData.incomesData;
  }


  addExpense(title: string, amount: number, subType: string, colorType: string){

    console.log(title);
    console.log(amount);
    
    

    this.usersData.expensesData.push({
      title: title,
      amount: amount,
      type: 'expense',
      subType: subType,
      colorType: colorType
    });
  }

  addIncomes(title: string, amount: number, subType: string, colorType: string){
    this.usersData.incomesData.push({
      title: title,
      amount: amount,
      type: 'expense',
      subType: subType,
      colorType: colorType
    })
  }

  sendData(){
    console.log('hello?');

    console.log(this.getUsersData());
    
    localStorage.setItem('usersMoney', JSON.stringify(this.getUsersData()))
  }
}
