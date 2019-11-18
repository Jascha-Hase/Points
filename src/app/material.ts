import {MatButtonModule, MatCheckboxModule, MatInputModule, MatFormFieldModule, MatIconModule, MatCardModule, MatToolbarModule, MatGridListModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatIconModule, MatCardModule, MatToolbarModule, MatGridListModule],
    exports: [MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatIconModule, MatCardModule, MatToolbarModule, MatGridListModule],
})
export class MyMaterials{

}