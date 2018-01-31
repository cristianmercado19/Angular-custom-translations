import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleARoutingModule, routedComponents } from './module-a-routing.module';
import { ComponentAComponent } from './componentA/componentA.component';

@NgModule({
  imports: [
    CommonModule,
    ModuleARoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [
    ...routedComponents
  ]
})
export class ModuleAModule { }
