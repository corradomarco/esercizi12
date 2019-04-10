import { Component, OnInit } from '@angular/core';

import {
 FormBuilder,
 FormGroup,
 Validators,
} from '@angular/forms';

@Component({
 selector: 'app-form-demo',
 templateUrl: './form-demoo.component.html',
 styleUrls: ['./form-demoo.component.css']
})
export class FormDemoComponent implements OnInit {
 myForm: FormGroup;
 constructor(fb: FormBuilder) {
   this.myForm = fb.group({
     'sku': ['ABC123', Validators.required] , 'price':['100', Validators.required] , 'capacità':['100', Validators.required]

   });
 }
 ngOnInit() {
 }

 onSubmit(value: string): void {
   console.log('you submitted value: ', value);
 }
}
