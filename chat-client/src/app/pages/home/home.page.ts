import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nickname = '';

  constructor(private navController: NavController) { }

  joinChat() {
    sessionStorage.setItem('nickname', this.nickname);
    this.navController.navigateRoot(`select-room`);
    console.log('Join chat As:', this.nickname);

  }
}
