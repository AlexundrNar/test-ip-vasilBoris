import { Component } from "@angular/core";
import { ITransaction } from "src/app/models/transaction";
import { data } from "src/app/data/transactions";

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
})

export class SummaryPageComponent {
  transactions: ITransaction[] = data;
  income: ITransaction[] = data.filter(obj => obj.type === 'income');
  outcome: ITransaction[] = data.filter(obj => obj.type === 'outcome');
  investment: ITransaction[] = data.filter(obj => obj.type === 'investment');
  loans: ITransaction[] = data.filter(obj => obj.type === 'loan');
}

