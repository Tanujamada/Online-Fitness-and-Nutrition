import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient,withFetch, withInterceptors } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BmiCalculationComponent } from './bmi-calculation/bmi-calculation.component';
import { ResultComponent } from './result/result.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { authInterceptor } from './auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    BmiCalculationComponent,
    ResultComponent,
    NotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [provideHttpClient(withFetch()),provideHttpClient(withInterceptors([authInterceptor]))],
  bootstrap: [AppComponent]
})

export class AppModule {
  
 }
