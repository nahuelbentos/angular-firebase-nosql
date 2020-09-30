import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';

import { AngularFireAuth } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(
    private firestore: AngularFirestore,
    private auth: AngularFireAuth
  ) {}

  private usuarios: AngularFirestoreCollection<any>;

  getUsuarios() {
    return this.firestore.collection<any>('usuarios').valueChanges();
  }

  logout() {
    return this.auth.signOut();
  }

  loginWithEmailPassword(
    email: string,
    password: string
  ): Promise<firebase.auth.UserCredential> {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  createUser(
    email: string,
    password: string
  ): Promise<firebase.auth.UserCredential> {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  createUserInFirestore(user): Promise<void> {
    return this.firestore.doc(`usuarios/${user.email}`).set(user);
  }
}
