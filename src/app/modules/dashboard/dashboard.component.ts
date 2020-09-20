import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { RootState } from '../../root-component/store/root.state';
import { selectIsLogged, selectLoginState } from '../login/store/login.selectors';
import { filter, map, share, tap } from 'rxjs/operators';
import { logoutAction } from '../login/store/login.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isLogged: boolean;

  constructor(private router: Router,
              private store$: Store<RootState>) { }

  ngOnInit(): void {
    this.store$.pipe(
      select(selectIsLogged)
    ).subscribe((isLogged) => this.isLogged = isLogged);
  }

  login(): void {
    this.router.navigateByUrl('app/login');
  }

  logout(): void {
    this.store$.dispatch(logoutAction());
  }

  // I wanted to use async pipe to use more RxJS
  // But the implementation generates problems with default null value
  // https://blog.lacolaco.net/2020/02/async-pipe-initial-null-problem-en/
  /*
  this.isLogged$ = this.store$.pipe(
    select(selectIsLogged),
    filter(state => !!state),
    map(state => state.isLogged),
    share()
   );
  */

}
