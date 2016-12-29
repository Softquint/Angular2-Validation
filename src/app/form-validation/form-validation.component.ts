import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent {

// The FormGroup object as you may remember from the simple form example exposes various API’s for dealing with forms. Here we are creating a new object and setting its type to FormGroup
  complexForm : FormGroup;

  // We are passing an instance of the FormBuilder to our constructor
  constructor(fb: FormBuilder){
    // Here we are using the FormBuilder to build out our form.    
    this.complexForm = fb.group({
      // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
      'firstName' : [null, Validators.required],
      // We can use more than one validator per field. If we want to use more than one validator we have to wrap our array of validators with a Validators.compose function. Here we are using a required, minimum length and maximum length validator.
      'lastName': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      'gender' : [null, Validators.required],
      'hiking' : false,
      'running' :false,
      'swimming' :false
    });
  }

  // Again we’ll implement our form submit function that will just console.log the results of our form
  submitForm(value: any):void{
    console.log('Reactive Form Data: ')
    console.log(value);
  }
 
}
