import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostAuthor } from 'src/app/core/models';
import { AuthorService } from 'src/app/core/service';

@Component({
  selector: 'app-create-author',
  templateUrl: './create-author.component.html',
  styleUrls: ['./create-author.component.scss']
})
export class CreateAuthorComponent {

  author : PostAuthor;

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    birthday: new FormControl('', Validators.required),
    imdbId: new FormControl(''),
  })

  constructor(
    private authService: AuthorService,
    private router: Router
  ){}


  submitForm(){
    console.log(this.form)
    this.author = {...this.form.value } as unknown as PostAuthor;
    this.author.imdbId = "-";
    /* console.log(this.author); */

    this.authService.postAuthor(this.author).subscribe((result) => {
      /* console.log(result); */
      alert("Sucess!");

    });
    this.router.navigate(['/movies']);
  }
}
