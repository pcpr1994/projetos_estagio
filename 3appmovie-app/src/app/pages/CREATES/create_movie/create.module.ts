import { NgModule, NO_ERRORS_SCHEMA  } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { CreateRoutingModule } from "./create-routing.module";
import { CreateComponent } from "./create.component";
import { DropDownModule } from "nativescript-drop-down/angular";

@NgModule({
  imports: [NativeScriptCommonModule, DropDownModule,
    CreateRoutingModule],
  declarations: [CreateComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class CreateModule {}
