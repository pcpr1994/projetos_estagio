import { Component } from '@angular/core'
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: 'ns-delete',
  templateUrl:'./delete.component.html',
})

export class DeleteComponent {
  constructor(private route: ActivatedRoute, private router: Router)
  { }
}
