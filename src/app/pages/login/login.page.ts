import { MenuController } from '@ionic/angular';
import { Component, NgZone } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseAuthService } from '../../services/firebase-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  signInForm: FormGroup;
  submitError: string;
  authRedirectResult: Subscription;

  validationMessages = {
    email: [
      { type: 'required', message: 'Email é obrigatório' },
      { type: 'pattern', message: 'Informe um email válido.' }
    ],
    password: [
      { type: 'required', message: 'Senha é obrigatória' },
      { type: 'minlength', message: 'A senha deve ter pelo menos 6 caracteres.' }
    ]
  };

  constructor(
    public angularFire: AngularFireAuth,
    public router: Router,
    private ngZone: NgZone,
    private authService: FirebaseAuthService,
    private menuCtrl: MenuController
  ) {
    this.signInForm = new FormGroup({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ]))
    });

    // Get firebase authentication redirect result invoken when using signInWithRedirect()
    // signInWithRedirect() is only used when client is in web but not desktop
    this.authRedirectResult = this.authService.getRedirectResult()
    .subscribe(result => {
      if (result.user) {
        this.redirectLoggedUserToHomePage();
      } else if (result.error) {
        this.submitError = result.error;
      }
    });
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
  // Once the auth provider finished the authentication flow, and the auth redirect completes,
  // redirect the user to the profile page
  redirectLoggedUserToHomePage() {
    // As we are calling the Angular router navigation inside a subscribe method, the navigation will be triggered outside Angular zone.
    // That's why we need to wrap the router navigation call inside an ngZone wrapper
    this.ngZone.run(() => {
      this.router.navigate(['home']);
    });
  }

  signInWithEmail() {
    this.authService.signInWithEmail(this.signInForm.value.email, this.signInForm.value.password)
    .then(user => {
      // navigate to user profile
      this.redirectLoggedUserToHomePage();
    })
    .catch(error => {
      this.submitError = error.message;
    });
  }

  facebookSignIn() {
    this.authService.signInWithFacebook()
    .then((result: any) => {
      if (result.additionalUserInfo) {
        this.authService.setProviderAdditionalInfo(result.additionalUserInfo.profile);
      }
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      // const token = result.credential.accessToken;
      // The signed-in user info is in result.user;
      this.redirectLoggedUserToHomePage();
    }).catch((error) => {
      // Handle Errors here.
      console.log(error);
    });
  }

  googleSignIn() {
    this.authService.signInWithGoogle()
    .then((result: any) => {
      if (result.additionalUserInfo) {
        this.authService.setProviderAdditionalInfo(result.additionalUserInfo.profile);
      }
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const token = result.credential.accessToken;
      // The signed-in user info is in result.user;
      this.redirectLoggedUserToHomePage();
    }).catch((error) => {
      // Handle Errors here.
      console.log(error);
    });
  }

  twitterSignIn() {
    this.authService.signInWithTwitter()
    .then((result: any) => {
      if (result.additionalUserInfo) {
        this.authService.setProviderAdditionalInfo(result.additionalUserInfo.profile);
      }
      // This gives you a Twitter Access Token. You can use it to access the Twitter API.
      // const token = result.credential.accessToken;
      // The signed-in user info is in result.user;
      this.redirectLoggedUserToHomePage();
    }).catch((error) => {
      // Handle Errors here.
      console.log(error);
    });
  }
}
