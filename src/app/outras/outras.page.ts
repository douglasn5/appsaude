import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-outras',
  templateUrl: './outras.page.html',
  styleUrls: ['./outras.page.scss'],
})
export class OutrasPage implements OnInit {

  url: any;
  constructor(private domSanitize:DomSanitizer,private navCtrl:NavController) {

  }

  ngOnInit() {
    this.url=
    this.domSanitize.bypassSecurityTrustResourceUrl('https://www.novaiguacu.rj.gov.br/semus/gripe/');
  }
voltar(){
  this.navCtrl.navigateForward('home');
}
}
