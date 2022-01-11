import { FirebaseService } from './../firebase.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  moneyTransaction: any;

  constructor(
    public firebaseService: FirebaseService
  ) {
    this.firebaseService.get_transaccion().subscribe((res) => {
      this.moneyTransaction = res.map(e => {
        return {
          id: e.payload.doc.id,
          type: e.payload.doc.data()['type'],
          title: e.payload.doc.data()['title'],
          subTitle: e.payload.doc.data()['subTitle'],
          amount: e.payload.doc.data()['amount'],

        }
      })
      console.log(this.moneyTransaction)
    }, (err: any) => {
      console.log(err);
    })
  }

  delete_transaction(transactionId){
    this.firebaseService.delete_transaction(transactionId).then((res:any) =>{
      console.log(res);
    })
  }
}
