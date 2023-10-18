import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { NgIf } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatNativeDateModule } from '@angular/material/core';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { UserComponent } from './Settings/user/user.component';
import { TableComponent } from './Settings/table/table.component';
import { MenuComponent } from './Settings/menu/menu.component';
import { StockComponent } from './Settings/stock/stock.component';
import { IngredientComponent } from './Settings/ingredient/ingredient.component';
import { RoleComponent } from './Settings/role/role.component';
import { CategoryComponent } from './Settings/category/category.component';
import { CategoryFormComponent } from './Settings/category/category-form/category-form.component';
import { IngredientFormComponent } from './Settings/ingredient/ingredient-form/ingredient-form.component';
import { MenuFormComponent } from './Settings/menu/menu-form/menu-form.component';
import { StockFormComponent } from './Settings/stock/stock-form/stock-form.component';
import { UserFormComponent } from './Settings/user/user-form/user-form.component';
import { TableFormComponent } from './Settings/table/table-form/table-form.component';
import { RoleFormComponent } from './Settings/role/role-form/role-form.component';
import { SettingComponent } from './Settings/setting/setting.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmComponent } from './confirm/confirm.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DineInComponent } from './dine-in/dine-in.component';
import { DineInFormComponent } from './dine-in/dine-in-form/dine-in-form.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    UserComponent,
    TableComponent,
    MenuComponent,
    StockComponent,
    IngredientComponent,
    RoleComponent,
    CategoryComponent,
    CategoryFormComponent,
    IngredientFormComponent,
    MenuFormComponent,
    StockFormComponent,
    UserFormComponent,
    TableFormComponent,
    RoleFormComponent,
    SettingComponent,
    ConfirmComponent,
    LoginComponent,
    SignUpComponent,
    DineInComponent,
    DineInFormComponent,
    DashboardComponent,
  
  ],
  imports: [
    LayoutModule,
    FlexLayoutModule,
    BrowserModule,
    NgChartsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    NgIf,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatCardModule,
    MatNativeDateModule,
    MatListModule,
    MatBottomSheetModule,
    FormsModule, 
    ReactiveFormsModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
   
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
