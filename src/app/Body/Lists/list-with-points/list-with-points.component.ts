import { Component, OnInit } from '@angular/core';
import { Points } from './list-of-points';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import{ LoginComponent } from '../../login/login.component';
 
@Component({
  selector: 'app-list-with-points',
  templateUrl: './list-with-points.component.html',
  styleUrls: ['./list-with-points.component.scss']
})
export class ListWithPointsComponent implements OnInit {
  points: Points[] = [];
  saved: Boolean = false;
  constructor(private loginComponent: LoginComponent) {
    this.points = [
      {
        id: 1,
        content: 'Sort Me',
        priority: 0,
      },
      {
        id: 2,
        content: 'Bottom',
        priority: 0,
      },
      {
        id: 3,
        content: 'Top',
        priority: 0,
      },
    ];
    this.save();
    this.sortedPoints = [];
  }
  sortedPoints: Points[] = [];

  drop(event: CdkDragDrop<[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
  save(){
    this.setLocalStorageDoneTasks(this.sortedPoints);
  }
  changeSaved(){
    this.saved = true;
  }
  private setLocalStorageDoneTasks(sortedPoints: Points[]): void{
    localStorage.setItem('sortedPoints', JSON.stringify({sortedPoints: this.sortedPoints}));
  }
  
  private getLocalStorage(){
    let localStorageItem = JSON.parse(localStorage.getItem('sortedPoints'));
    return localStorageItem == null ? [] : localStorageItem.sortedPoints;
  }

  ngOnInit(){
    this.getLocalStorage();
    }
}