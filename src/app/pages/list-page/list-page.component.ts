import { Component, OnInit } from '@angular/core';
import { ITransaction } from 'src/app/models/transaction';
import { data } from 'src/app/data/transactions';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
})
export class ListPageComponent implements OnInit {
  income: ITransaction[] = data.filter((obj) => obj.type === 'income');
  outcome: ITransaction[] = data.filter((obj) => obj.type === 'outcome');
  investment: ITransaction[] = data.filter((obj) => obj.type === 'investment');
  loans: ITransaction[] = data.filter((obj) => obj.type === 'loan');

  tab: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.tab = queryParams['tab'];
    });
  }
}
