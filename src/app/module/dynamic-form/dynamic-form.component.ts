import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FieldConfig } from 'src/app/interfaces/form.interface';
import { decryptInput, encryptInput } from 'src/app/common/encryption.utility';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent {
  dynamicForm!: FormGroup;
  @Input() fields!: any;
  // fields!: FieldConfig[];
  buttons: any = [];

  constructor(private _snackbar: MatSnackBar) { }


  ngOnInit() {
    // this.initFormFields();
    this.createDynamicForm();
  }


  private initFormFields() {
    this.fields = [
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

    this.createDynamicForm()
  }

  private createDynamicForm() {
    const controls: any = {};
    // const buttons = [];

    for (let field of this.fields) {
      if (field.type !== 'button' && field.type !== 'checkbox') {
        controls[field.name!] = new FormControl(field.value || '', this.bindValidations(field.validators))
      }
      if (field.type === 'checkbox') {
        controls[field.name!] = new FormControl(field.value, this.bindValidations(field.validators))
      }
    }

    this.dynamicForm = new FormGroup(controls);
    // console.log('Controls: ', controls)
  }


  onSubmit() {
    // console.log(this.dynamicForm.value);
    const { username, password } = this.dynamicForm.value;
    const pwd = encryptInput(password);
    if (username === 'devansh09' && password === 'devansh') {
      sessionStorage.setItem('authUser', JSON.stringify(encryptInput(password)))
      this._snackbar.open('Login Successful', 'Dismiss', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
        panelClass: 'success'
      })
    }
  }

  private bindValidations(validators: any) {
    if (validators?.length > 0) {
      const validations = [];
      for (let validator of validators) {
        validations.push(validator.validator)
      }
      console.log('Validations: ', validations)
      return Validators.compose(validations);
    }
    return null;
  }

}
