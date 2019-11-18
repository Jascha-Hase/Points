import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header/header.component';
import { FooterComponent } from './Footer/footer/footer.component';
import { LoginComponent } from './Body/login/login.component';
import { ListWithPointsComponent } from './Body/Lists/list-with-points/list-with-points.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MyMaterials } from './material';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ListWithPointsComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MyMaterials
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
