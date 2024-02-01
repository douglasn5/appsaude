import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
  styleUrls: ['./sobre.page.scss'],
})
export class SobrePage implements OnInit {
url: any;
  constructor(private domSanitize:DomSanitizer,private navCtrl:NavController) {

  }

  ngOnInit() {
    this.url=
    this.domSanitize.bypassSecurityTrustResourceUrl('https://covid.saude.gov.br/');
  }
voltar(){
  this.navCtrl.navigateForward('home');
}
}
