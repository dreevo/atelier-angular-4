import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConvertisseurComponent } from './convertisseur/convertisseur.component';
import { ToEuroConvertComponent } from './to-euro-convert/to-euro-convert.component';
import { FormsModule } from '@angular/forms';
import { ActorsComponent } from './actors/actors.component';
import { ActorComponent } from './actor/actor.component';
import { ParentComponent } from './parent/parent.component';
import { FilsComponent } from './fils/fils.component';

@NgModule({
  declarations: [AppComponent, ConvertisseurComponent, ToEuroConvertComponent, ActorsComponent, ActorComponent, ParentComponent, FilsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
