
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './Settings/setting/setting.component';
import { UserComponent } from './Settings/user/user.component';
import { RoleComponent } from './Settings/role/role.component';
import { MenuComponent } from './Settings/menu/menu.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './Settings/table/table.component';
import { IngredientComponent } from './Settings/ingredient/ingredient.component';
import { StockComponent } from './Settings/stock/stock.component';
import { CategoryComponent } from './Settings/category/category.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'role', component: RoleComponent },
  { path: 'user', component: UserComponent },
  { path: 'setting', component: SettingComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'table', component: TableComponent},
  {path: 'stock', component: StockComponent},
  { path: 'login', component: LoginComponent},
  { path: 'ingredient', component: IngredientComponent},
  { path: 'category', component: CategoryComponent},
  { path: 'signup', component: SignUpComponent}
  // otherwise redirect to home
  // { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
