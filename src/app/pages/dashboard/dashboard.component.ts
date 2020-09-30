import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { FirebaseService } from '../../services/firebase.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [{ id: 1, title: 'Usuarios', cols: 1, rows: 1 }];
      }

      return [{ id: 1, title: 'Usuarios', cols: 2, rows: 1 }];
    })
  );

  items: Observable<any[]>;

  constructor(
    private breakpointObserver: BreakpointObserver,
    firebase: FirebaseService
  ) {
    this.items = firebase.getUsuarios();
  }
}
