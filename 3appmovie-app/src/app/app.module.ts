import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule, NativeScriptHttpClientModule, NativeScriptModule } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ItemsComponent } from './item/items.component'
import { ItemDetailComponent } from './item/item-detail.component'
import { HttpClientModule } from '@angular/common/http'
import { NativeScriptFormsModule } from '@nativescript/angular'
//import { HTTP_PROVIDERS } from "nativescript-http";
import {CreateIMDBComponent} from "./pages/CREATES/create_IMDB/createIMDB.component"
import {CreateGenreComponent} from "./pages/CREATES/create_genre/createGenre.component"
import {CreateAuthorComponent} from "./pages/CREATES/create_author/createAuthor.component"
import {EditMovieComponent} from './pages/editMovie/editMovie.component'

import { DropDownModule } from "nativescript-drop-down/angular"
import { NativeScriptDateTimePickerModule } from "@nativescript/datetimepicker/angular";
//import * as mobileStorage from 'nativescript-localstorage';
import {CustomStorageService} from './core/services/CustomStorageService.service'
@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule,
            AppRoutingModule,
            HttpClientModule,
            NativeScriptHttpClientModule,
            NativeScriptFormsModule,
            DropDownModule,
            NativeScriptCommonModule,
            NativeScriptDateTimePickerModule],
  declarations: [AppComponent,
    ItemsComponent,
    ItemDetailComponent,
    CreateIMDBComponent,
    CreateGenreComponent,
    CreateAuthorComponent,
    EditMovieComponent],
  providers: [{
      provide: CustomStorageService,
      /* useValue: mobileStorage */

  }],
  //providers: [HTTP_PROVIDERS],

  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}

