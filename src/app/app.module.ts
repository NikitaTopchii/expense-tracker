import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NgChartsModule } from 'ng2-charts';
import { ButtonComponent } from './ui-components/button/button.component';
import { MoneyDataComponent } from './components/money-data/money-data.component';
import { MoneyDataFormComponent } from './components/money-data-form/money-data-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersMoneyPageComponent } from './components/users-money-page/users-money-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ButtonComponent,
    MoneyDataComponent,
    MoneyDataFormComponent,
    UsersMoneyPageComponent
  ],
  imports: [
    BrowserModule,
    NgChartsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
