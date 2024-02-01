import { Component, OnInit } from '@angular/core';
import { FirebaseloginService } from '../model/firebaselogin.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage{
  email:string='';
  senha:string='';
  mensagem:string='';
  constructor(private service:FirebaseloginService, private navCtrl: NavController){}


  registrar(){
    if(this.email && this.senha){
  
      this.service.cadastro(this.email,this.senha).then(
        result => {
          console.log('Usuario registrado', result.user)
          alert('Cadastrado com sucesso');
  
          this.navCtrl.navigateForward('/')
        }
      ). catch(
        error => {
          console.log('Erro ao tentar se cadastrar',error)
          this.mensagem= 'Erro ao tentar se cadastrar';
        }
      )
    } else{
      this.mensagem='Por favor, preencha todos os campos'
    }
  
  }
  

  

}
