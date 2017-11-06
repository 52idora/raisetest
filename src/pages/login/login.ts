import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,ToastController } from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import { HttpService } from '../../service/httpUtil';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user:any;
  pushPage:any;

  constructor(public navCtrl: NavController,public navParams:NavParams,public alertCtrl:AlertController,public http:HttpService,public toast:ToastController) {
    this.pushPage=TabsPage;
    this.user = {}
  }

  login(){
    if(this.user.name==null){
      let toast = this.toast.create({
        message: 'user name is Empty!',
        duration: 3000
      });
      toast.present();
      return;
    } else if(this.user.password==null){
      let toast = this.toast.create({
        message: 'user password is Empty!',
        duration: 3000
      });
      toast.present();
      return;
    } else{
      if(this.user.name=='yuanrui' && this.user.password=='123456'){
        sessionStorage.setItem("CUR_USER",JSON.stringify(this.user));
        this.navCtrl.push(this.pushPage);
      } else{
        let toast = this.toast.create({
          message: 'user info error',
          duration: 3000
        });
        toast.present();
      }
      //http请求
        /*this.http.httpPost("http://localhost:9006/login",this.user).then(data=>{
            if(data.state==1){
              console.log(data);
              sessionStorage.setItem("CUR_USER",JSON.stringify(data.data));
              this.navCtrl.push(this.pushPage);
            } else{
              let toast = this.toast.create({
                message: 'user info error',
                duration: 3000
              });
              toast.present();
            }
          });*/
      }
    }

}
