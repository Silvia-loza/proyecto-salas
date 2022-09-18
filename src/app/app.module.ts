import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalaComponent } from './components/sala/sala.component';
import { HeaderComponent } from './components/header/header.component';
import { PlantaComponent } from './components/planta/planta.component';
import { ButtonComponent } from './elements/button/button.component';
import { InputComponent } from './elements/input/input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SalaComponent,
    HeaderComponent,
    PlantaComponent,
    ButtonComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }