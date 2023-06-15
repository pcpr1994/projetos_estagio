
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'
import { DeleteRoutingModule } from './delete-routing.module'
import { DeleteComponent } from './delete.component'

@NgModule({
  imports:[NativeScriptCommonModule, DeleteRoutingModule],
  declarations: [DeleteComponent],
  schemas: [NO_ERRORS_SCHEMA]

})

export class DeleteModule {}
