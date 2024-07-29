import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, incremant, reset } from '../state/counter.action';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewChild, ViewContainerRef, ComponentFactoryResolver, OnInit } from '@angular/core';
import { DynamicComponent } from 'src/app/dynamic/dynamic.component';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent {
  form: FormGroup;
  @ViewChild('dynamicContainer', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver, private fb: FormBuilder, private store: Store<{ counter: { counter: number } }>) {
    this.form = this.fb.group({
      items: this.fb.array([]),
    });

  }
  loadComponent(type: string) {
    console.log(type);

    this.container.clear();
    let componentFactory;

    if (type === 'dynamic') {
      componentFactory = this.resolver.resolveComponentFactory(DynamicComponent);
      console.log(componentFactory);

    }

    if (componentFactory) {
      this.container.createComponent(componentFactory);
    }
  }




  get items() {
    return this.form.get('items') as FormArray;
  }

  addItem() {
    const itemGroup = this.fb.group({
      name: ['', Validators.required],
      quantity: ['', Validators.required],
    });

    this.items.push(itemGroup);
  }

  removeItem(index: number) {
    this.items.removeAt(index);
  }

  submit() {
    console.log(this.form.value);
  }



  onIncremant() {
    this.store.dispatch(incremant())
  }

  onDecremant() {
    this.store.dispatch(decrement())
  }


  onReset() {
    this.store.dispatch(reset())
  }

}
