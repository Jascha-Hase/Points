import {MatButtonModule, MatCheckboxModule, MatInputModule, MatFormFieldModule, MatIconModule, MatCardModule, MatToolbarModule, MatGridListModule, MatProgressSpinnerModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatIconModule, MatCardModule, MatToolbarModule, MatGridListModule, MatProgressSpinnerModule],
    exports: [MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatIconModule, MatCardModule, MatToolbarModule, MatGridListModule, MatProgressSpinnerModule],
})
export class MyMaterials{

}