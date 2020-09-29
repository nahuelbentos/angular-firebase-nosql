import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  DocumentReference,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';

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

  private usuarios: AngularFirestoreCollection<any>;

  getItems() {
    return this.firestore.collection('items').valueChanges();
  }

  getUsuarios() {
    this.usuarios = this.firestore.collection<any>('usuarios');
    return this.usuarios.valueChanges();
  }

  logout() {
    this.auth.signOut();
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

  createUserInFirestore(
    user: firebase.auth.UserCredential
  ): Promise<DocumentReference> {
    return this.usuarios.add(user);
  }

  createUserInRealtimeDatabase(
    user: firebase.auth.UserCredential
  ): Promise<DocumentReference> {
    return this.firestore.collection('usuarios').add(user);
  }
}
