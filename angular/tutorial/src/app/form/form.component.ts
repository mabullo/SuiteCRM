import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form!: FormGroup;

  constructor(public fb: FormBuilder) {
    // setting dei controlli dei campi del form
    this.form = fb.group({
      'user':['',Validators.required],
      'email':['',Validators.required],
      'date':['']
    });
   }

  ngOnInit(): void {
  }

  checkUser(){
    let user=this.form.controls['user'].value;
    if(!(user.length>=8)){
      // forzo il campo ad errore se il numero di caratteri è minore di 8
      this.form.controls['user'].setErrors({incorrect:true});
    }
    else{
      this.form.controls['user'].setErrors(null);
    }
  }

  send() : void{
    if(!this.form.valid){
      alert('compilare tutti i campi');
      return;
    }
    else{
      console.log('compilazione ok!');
      console.log(
        this.form.controls['user'].value,
        this.form.controls['email'].value,
        this.form.controls['date'].value
      );
    }
  }

}
