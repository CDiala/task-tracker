import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { getValue } from 'src/utils/dateFormatter';

@Component({
  selector: 'app-input-date',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './input-date.component.html',
  styleUrl: './input-date.component.css',
})
export class InputDateComponent {
  @Input({ alias: 'label', required: false }) label!: string;
  @Input()
  controlName!: string;
  @Input()
  form!: FormGroup;
  // @Output() dateEmitter: EventEmitter<string> = new EventEmitter<string>();

  selectedValue!: string;
  placeholder!: string;

  formName() {
    return this.form?.get(this.controlName) as FormControl;
  }

  saveDate(event: Event) {
    this.selectedValue = getValue(event);
    // this.dateEmitter.emit(this.selectedValue);
  }

  onChange() {}
}
