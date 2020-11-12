//Modulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PanelRoutingModule } from './panel-routing.module';
import { FormsModule } from '@angular/forms';
import { MomentModule } from 'angular2-moment';

//Components
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { ListComponent } from './components/list/list.component';
import { MainComponent } from './components/main/main.component';

//servicios
import { UserService } from '../services/user.service';
import { UserGuard } from '../services/user.guard';


@NgModule({
    declarations: [
      AddComponent,
      EditComponent,
      ListComponent,
      MainComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        PanelRoutingModule,
        MomentModule
    ],
    exports:[
        MainComponent,
        ListComponent,
        AddComponent,
        EditComponent
    ],

    providers: [
      UserService,
      UserGuard
    ]
  })
  export class PanelModule { }