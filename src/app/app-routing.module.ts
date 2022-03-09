import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './pages/home.page-module';
import { AboutPageModule } from './pages/about.page-module';
import { EmployeeDetailsPageModule } from './pages/employee-details.page-module';
import { EmployeesPageModule } from './pages/employees.page-module';
import { ContactUsPageModule } from './pages/contact-us.page-module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => HomePageModule,
  },
  {
    path: 'about',
    loadChildren: () => AboutPageModule,
  },
  {
    path: 'pracownik',
    loadChildren: () => EmployeesPageModule,
  },
  {
    path: 'pracownik/:name',
    loadChildren: () => EmployeeDetailsPageModule,
  },
  {
    path: 'kontakt',
    loadChildren: () => ContactUsPageModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
