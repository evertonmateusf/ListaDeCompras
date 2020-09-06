import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseAuthService } from 'src/app/services/firebase-auth.service';

@Component({
  selector: 'app-lista-de-compras',
  templateUrl: './lista-de-compras.page.html',
  styleUrls: ['./lista-de-compras.page.scss'],
})
export class ListaDeComprasPage implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: FirebaseAuthService) { }

  ngOnInit() {
  }
  signOut() {
    this.authService.signOut().subscribe(() => {
      // Sign-out successful.
      this.router.navigate(['login']);
    }, (error) => {
      console.log('signout error', error);
    });
  }
}
