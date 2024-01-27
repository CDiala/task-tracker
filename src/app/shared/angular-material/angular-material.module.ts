import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatButtonModule],
  exports: [MatButtonModule, MatInputModule, MatIconModule],
})
export class AngularMaterialModule {}
