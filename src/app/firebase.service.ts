import { SnapshotCallback } from './../../node_modules/@firebase/database-compat/dist/database-compat/src/api/Reference.d';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
collectionName = 'money-track';

  constructor(private firestore : AngularFirestore)
   {   }

   get_transaccion(){
    return this.firestore.collection(this.collectionName).snapshotChanges();
   }

   add_transaction(data){
    return this.firestore.collection(this.collectionName).add(data);
   }

   delete_transaction(id){
     return this.firestore.doc(this.collectionName + '/' + id).delete();
   }

   get_single_transaccion(id){
     return this.firestore.collection(this.collectionName).doc(id).valueChanges();
   }

   update_transaction(id,data){
    return this.firestore.doc(this.collectionName + '/' + id).update(data);
   }
}
