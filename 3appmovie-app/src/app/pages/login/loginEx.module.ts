import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule, NativeScriptHttpClientModule } from '@nativescript/angular'
import { LoginExRoutingModule } from './loginEx-routing.module'
import { LoginExComponent } from './loginEx.component'
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  imports: [NativeScriptCommonModule, LoginExRoutingModule, NativeScriptHttpClientModule, HttpClientModule],
  declarations: [LoginExComponent],
  schemas: [NO_ERRORS_SCHEMA]

})

export class LoginExModule {}
