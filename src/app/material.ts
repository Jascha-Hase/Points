import {MatButtonModule, MatCheckboxModule, MatInputModule, MatFormFieldModule, MatIconModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatIconModule],
    exports: [MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatIconModule],
})
export class MyMaterials{

}