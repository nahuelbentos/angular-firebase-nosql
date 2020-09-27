import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(
    private firestore: AngularFirestore,
    private auth: AngularFireAuth
  ) {}

  getItems() {
    return this.firestore.collection('items').valueChanges();
  }

  loginWithEmailPassword(
    email: string,
    password: string
  ): Promise<firebase.auth.UserCredential> {
    return this.auth.signInWithEmailAndPassword(email, password);

    // return this.auth
    //   .createUserWithEmailAndPassword(email, password)
    //   .then(() => this.auth.signInWithEmailAndPassword(email, password).then());

    // return this.auth.signInWithEmailAndPassword();
  }
  createUser(
    email: string,
    password: string
  ): Promise<firebase.auth.UserCredential> {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }
}
