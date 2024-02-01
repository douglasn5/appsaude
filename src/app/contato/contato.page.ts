import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
})
export class ContatoPage implements OnInit {

  url: any;
  constructor(private domSanitize:DomSanitizer,private navCtrl:NavController) {

  }

  ngOnInit() {
    this.url=
    this.domSanitize.bypassSecurityTrustResourceUrl('https://samues.com.br/sobre.php');
  }
voltar(){
  this.navCtrl.navigateForward('home');
}

}
