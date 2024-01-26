import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IInputConfig } from 'src/app/interfaces/i-input-config';

@Component({
  selector: 'app-input-group',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input-group.component.html',
  styleUrl: './input-group.component.css',
})
export class InputGroupComponent {
  @Input('inputConfig') config!: IInputConfig;
  @Input()
  controlName!: string;
  @Input()
  form!: FormGroup;
  @Output() checkedState: EventEmitter<boolean> = new EventEmitter();

  isClicked: boolean = false;

  formName() {
    return this.form?.get(this.controlName) as FormControl;
  }

  toggleClick() {
    this.isClicked = !this.isClicked;
    // console.log('isclicked:', this.isClicked);
    this.checkedState.emit(this.isClicked);
  }
}
