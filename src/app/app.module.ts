import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import { AppEncaminamentModule } from './app-encaminament.module';

import { M01_SalutacioComponent } from './m01-salutacio.component';
import { M02_SumaComponent } from './m02-suma.component';
import { M03_IteradorComponent } from './m03-iterador.component';
import { M04_PomodoroComponent } from './m04-pomodoro.component';
import { M05_BindingsComponent } from './m05-bindings.component';
import { M05_CompteEnrera_Component } from './m05-bindings.component';
import { M06_DirectivesComponent } from './m06-directives.component';
import { M07_DirectivaPersonalitzadaComponent } from './m07-directiva-personalitzada.component';
import { M07_DirectivaPersonalizada } from './m07-directiva-personalitzada.directive';
import { M08_PipesComponent } from './m08-pipes.component';
import { M09_PipePersonalizadaComponent } from './m09-pipe-personalitzada.component';
import { M09_OrdenarPerPipe } from './m09-ordenar-per.pipe';
import { M10_AnimacionsComponent } from './m10-animacions.component';
import { M10_AnimacioComponent } from './m10-animacio.component';
import { M11_EncaminamentComponent } from './m11-encaminament.component';
import { M12_Http } from './m12-http.component';
import { M12_HttpDAOService } from './m12-httpdao.service';


@NgModule({
  declarations: [
    M01_SalutacioComponent,
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
    M10_AnimacionsComponent,
    M10_AnimacioComponent,
    M11_EncaminamentComponent,
    M12_Http
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppEncaminamentModule,
    HttpClientModule
  ],
  providers: [M12_HttpDAOService],
  bootstrap: [M06_DirectivesComponent]
})
export class AppModule { }
