import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { errorMensaje } from '../../utils/sweet-alert';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  hide = true;

  constructor(
    private fb: FormBuilder,
    private firebase: FirebaseService,
    private router: Router
  ) {
    this.buildForm();
  }

  private buildForm() {
    this.form = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }

  ngOnInit(): void {}

  login(event: Event) {
    event.preventDefault();

    if (this.form.invalid) {
      return;
    }

    console.log(this.form.value);

    const { email, password } = this.form.value;
    this.firebase
      .loginWithEmailPassword(email, password)
      .then((res) => {
        this.router.navigate(['dashboard']);
      })
      .catch((err) => {
        if (err.code === 'auth/user-not-found') {
          this.firebase
            .createUser(email, password)
            .then((user) => {
              console.log('creo usuario');

              this.firebase
                .createUserInFirestore(user)
                .then((res) => console.log(res))
                .catch((err) =>
                  console.log('error en createUserInFirestore: ', err)
                );

              this.firebase
                .loginWithEmailPassword(email, password)
                .then(() => this.router.navigate(['/dashboard']))
                .catch((err) =>
                  console.log('error en loginWithEmailPassword: ', err)
                );
            })
            .catch((err) => console.log('error en createUser: ', err));
        } else {
          errorMensaje('Error', err.message).then();
        }
      });
  }
}
