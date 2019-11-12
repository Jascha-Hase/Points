import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header/header.component';
import { FooterComponent } from './Footer/footer/footer.component';
import { LoginComponent } from './Body/login/login.component';
import { LoginProfilesComponent } from './Body/login-profiles/login-profiles.component';
import { ListWithPointsComponent } from './Body/Lists/list-with-points/list-with-points.component';
import { ListWithoutPointsComponent } from './Body/Lists/list-without-points/list-without-points.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LoginProfilesComponent,
    ListWithPointsComponent,
    ListWithoutPointsComponent,
    
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
