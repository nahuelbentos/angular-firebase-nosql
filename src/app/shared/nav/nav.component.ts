import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  mostrarLogout = true;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private firebase: FirebaseService,
    private router: Router
  ) {}

  logout() {
    this.firebase.logout().then((res) => {
      console.log(res);
      this.router.navigate(['login']);
    });
  }
}
