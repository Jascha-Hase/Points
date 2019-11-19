import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

import { Points } from './list-of-points';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-with-points',
  templateUrl: './list-with-points.component.html',
  styleUrls: ['./list-with-points.component.scss']
})
export class ListWithPointsComponent implements OnInit {
  points: Points[] = [];
  saved: Boolean = false;
  sortedPoints: Points[] = [];

  constructor(private authService: AuthService, private router: Router) {
    this.points = [
      {
        id: 1,
        content: 'Sort Me',
        discription: 'Fill me with more Infotmation about this Point'
      },
      {
        id: 2,
        content: 'Bottom',
        discription: 'Fill me with more Infotmation about this Point'
      },
      {
        id: 3,
        content: 'Top',
        discription: 'Fill me with more Infotmation about this Point'
      },
    ];
    this.sortedPoints = localStorage.getItem('sortedPoints') ? JSON.parse(localStorage.getItem('sortedPoints')).sortedPoints : [];
    this.points = this.points.filter(newItem => !this.sortedPoints.some(existing => existing.id == newItem.id));
  }

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
  
  save() {
    this.setLocalStorageDoneTasks(this.sortedPoints);
  }
  
  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

  changeSaved() {
    this.saved = true;
  }

  private setLocalStorageDoneTasks(sortedPoints: Points[]): void {
    localStorage.setItem('sortedPoints', JSON.stringify({ sortedPoints: this.sortedPoints }));
  }

  private getLocalStorage() {
    let localStorageItem = JSON.parse(localStorage.getItem('sortedPoints'));
    return localStorageItem == null ? [] : localStorageItem.sortedPoints;
  }

  ngOnInit() {
    this.getLocalStorage();
  }
}