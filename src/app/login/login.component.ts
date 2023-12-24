import { Component } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  fields = [
    {
      inputType: 'text',
      label: 'Username',
      type: 'input',
      name: 'username',
      validators: [{
        name: "required",
        validator: Validators.required,
        message: "Username required"
      }]
    },
    {
      inputType: 'password',
      label: 'Password',
      type: 'input',
      name: 'password',
      validators: [{
        name: "required",
        validator: Validators.required,
        message: "Password required"
      }]
    },
    {
      type: 'checkbox',
      inputType: 'checkbox',
      label: 'Remember me.',
      name: 'remember',
      value: false,
      validators: [
        {
          name: 'required',
          validator: Validators.required,
          message: "Please check me."
        }
      ]
    },
    {
      type: 'button',
      value: 'Submit',
      inputType: 'submit'
    },
    {
      type: 'button',
      value: 'Reset',
      inputType: 'reset'
    },
  ]
}
