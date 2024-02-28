import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { TestClassComponent } from './test-class/test-class.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { ProductsComponent } from './components/products/products.component';
import { ObservableTestComponent } from './components/observable-test/observable-test.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { FormTestComponent } from './components/form-test/form-test.component';
import { QRCodeModule } from 'angular2-qrcode';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CsvFileComponent } from './components/csv-file/csv-file.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegisterComponent,
    HeaderComponent,
    TestClassComponent,
    ParentComponent,
    ChildComponent,
    ProductsComponent,
    ObservableTestComponent,
    PipeComponent,
    FormTestComponent,
    CsvFileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    QRCodeModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
