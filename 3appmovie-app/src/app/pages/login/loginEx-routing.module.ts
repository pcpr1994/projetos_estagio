import { Routes } from '@angular/router'
import { LoginExComponent } from './loginEx.component'
import { NgModule } from '@angular/core'
import { NativeScriptRouterModule } from '@nativescript/angular'

export const routes: Routes = [
  { path: '', component: LoginExComponent}
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)]
})

export class LoginExRoutingModule {}


