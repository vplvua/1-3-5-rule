import { Component } from '@angular/core';

@Component({
  selector: 'app-list-menu',
  template: `
    <div class="row mt-3">
      <div class="col col-sm-12">
        <div class="row" id="btn-row">
          <div class="col-xs-12 text-end">
            <button class="btn btn-outline-success" routerLink="/edit">
              Add Task
            </button>
          </div>
        </div>
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a
              class="nav-link"
              style="cursor: pointer"
              routerLink="/today"
              routerLinkActive="active"
              >Today</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              style="cursor: pointer"
              routerLink="/week"
              routerLinkActive="active"
              >Week</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              style="cursor: pointer"
              routerLink="/month"
              routerLinkActive="active"
              >Month</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              style="cursor: pointer"
              routerLink="/all"
              routerLinkActive="active"
              >All Tasks</a
            >
          </li>
        </ul>
      </div>
    </div>
  `,
})
export class ListMenuComponent {}
