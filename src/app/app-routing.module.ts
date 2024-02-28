import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { TestClassComponent } from './test-class/test-class.component';
import { ParentComponent } from './components/parent/parent.component';
import { ProductsComponent } from './components/products/products.component';
import { ObservableTestComponent } from './components/observable-test/observable-test.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { FormTestComponent } from './components/form-test/form-test.component';
import { CsvFileComponent } from './components/csv-file/csv-file.component';

const routes: Routes = [
  {path : "user" , component : UserComponent},
  {path : "register" , component : RegisterComponent},
  {path : "test-class" , component : TestClassComponent},
  {path : "parent" , component : ParentComponent},
  {path : "products" , component : ProductsComponent},
  {path : "observable" , component : ObservableTestComponent},
  {path : "pipe" , component : PipeComponent},
  {path : "formTest" , component : FormTestComponent},
  {path : "csvFile" , component : CsvFileComponent},
  {path : "**" , component : UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
