import {MatButtonModule, MatCheckboxModule, MatInputModule, MatFormFieldModule, MatIconModule, MatCardModule, MatToolbarModule, MatGridListModule, MatProgressSpinnerModule, MatDialogModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatIconModule, MatCardModule, MatToolbarModule, MatGridListModule, MatProgressSpinnerModule, MatDialogModule],
    exports: [MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatIconModule, MatCardModule, MatToolbarModule, MatGridListModule, MatProgressSpinnerModule, MatDialogModule],
})
export class MyMaterials{

}