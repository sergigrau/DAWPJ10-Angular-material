import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {M02_SumaComponent} from './m02-suma.component';
import {M02_SumaComponent_bis} from './m02bis-suma.component';
import {M03_IteradorComponent} from './m03-iterador-taula.component';
import {M04_PomodoroComponent } from './m04-pomodoro.component';
import {M05_BindingsComponent, M05_CompteEnrera_Component} from './m05-bindings.component';
import {M06_DirectivesComponent} from './m06-directives.component';
import { M07_DirectivaPersonalitzadaComponent } from './m07-directiva-personalitzada.component';
import { M07_DirectivaPersonalizada } from './m07-directiva-personalitzada.directive';
import { M08_PipesComponent } from './m08-pipes.component';
import { M09_OrdenarPerPipe } from './m09-ordenar-per.pipe';
import { M09_PipePersonalizadaComponent } from './m09-pipe-personalitzada.component';
import {M10_AnimacioComponent} from './m10-animacio.component'
import {M10_AnimacionsComponent} from './m10-animacions.component'
import {M11_EncaminamentComponent} from './m11-encaminament.component'
import { AppEncaminamentModule } from './app-encaminament.module';
import { M01_SalutacioComponent } from './m01-salutacio.component';
import {HttpClientModule} from '@angular/common/http';
import {M12_Http} from './m12-http.component';
import {M15_PrimeraComponent} from './m15-primera.component'
import {M15_SegonaComponent} from './m15-segona.component'
import {M15_EncaminamentPasComponent} from './m15-encaminament_pas.component'

@NgModule({
  declarations: [
    M01_SalutacioComponent,
    M02_SumaComponent_bis,
    M02_SumaComponent,
    M03_IteradorComponent,
    M04_PomodoroComponent,
    M05_BindingsComponent,
    M05_CompteEnrera_Component,
    M06_DirectivesComponent,
    M07_DirectivaPersonalitzadaComponent,
    M07_DirectivaPersonalizada,
    M08_PipesComponent,
    M09_PipePersonalizadaComponent,
    M09_OrdenarPerPipe,
    M10_AnimacioComponent,
    M10_AnimacionsComponent,
    M11_EncaminamentComponent,
    M15_EncaminamentPasComponent,
    M15_PrimeraComponent,
    M15_SegonaComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppEncaminamentModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [M15_EncaminamentPasComponent]
})
export class AppModule { }
