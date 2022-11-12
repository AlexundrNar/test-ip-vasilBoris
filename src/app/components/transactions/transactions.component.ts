import { Component, Input } from '@angular/core';
import { ITransaction } from 'src/app/models/transaction';

@Component({
  selector: 'app-transaction',
  templateUrl: './transactions.component.html',
})

export class TransactionsComponent {
  @Input() income: ITransaction[];
  @Input() outcome: ITransaction[];
  @Input() investment: ITransaction[];
  @Input() loans: ITransaction[];
}
