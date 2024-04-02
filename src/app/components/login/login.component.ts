import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {


  resultForm : boolean = false;


  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder){
    
  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(){
    if(this.loginForm.valid){
    console.log(this.loginForm.value);
    this.resultForm = true;
    }else {
      // Manejar errores de validación
      console.log('Formulario invalido');
    }

  }

}