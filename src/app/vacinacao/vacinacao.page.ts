import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-vacinacao',
  templateUrl: './vacinacao.page.html',
  styleUrls: ['./vacinacao.page.scss'],
})
export class VacinacaoPage implements OnInit {

  url: any;
  constructor(private domSanitize:DomSanitizer,private navCtrl:NavController) {

  }

  ngOnInit() {
    this.url=
    this.domSanitize.bypassSecurityTrustResourceUrl("https://www.novaiguacu.rj.gov.br/semus/vacinacao-covid/calendario/");
  }
voltar(){
  this.navCtrl.navigateForward('home');
}
}
