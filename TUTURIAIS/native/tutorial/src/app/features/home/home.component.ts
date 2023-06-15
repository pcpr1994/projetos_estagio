// src/app/features/home/home.component.ts

import { Component } from '@angular/core'
import { FlickService } from '~/app/core'

import { ItemEventData } from '@nativescript/core'
import { RouterExtensions } from '@nativescript/angular'


@Component({
  moduleId: module.id,
  selector: 'ns-home',
  templateUrl: 'home.component.html'
})
export class HomeComponent {
  flicks = this.flickService.getFlicks()

  constructor(
    private flickService: FlickService,
    private routerExtensions : RouterExtensions
  ){}

  onFlickTap(args: ItemEventData): void {
    this.routerExtensions.navigate(['details', this.flicks[args.index].id])
  }



}
