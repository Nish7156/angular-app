import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTableModule} from '@angular/material/table';
import {MatSliderModule} from '@angular/material/slider';
import {MatTreeModule} from '@angular/material/tree';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';




const MaterialComponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatTableModule,
  MatSliderModule,
  MatTreeModule,
  MatProgressSpinnerModule,
  MatInputModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }






