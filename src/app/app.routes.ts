import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Component } from '@angular/core';
import { DashbaordComponent } from './dashbaord/dashbaord.component';
import { HomeComponent } from './home/home.component';
import { register } from 'module';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'dashbaord', component: DashbaordComponent },
    { path: 'home', component: HomeComponent },
    { path: 'register', component: RegisterComponent },

];
