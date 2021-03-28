import { Component } from '@angular/core';
import { ToastController, NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  //title for the app
  title = "Grocery list"
  //list of items
  items = [
    {
      name: "Milk",
      quantity: 2
    },
    {
      name: "Rice",
      quantity: 2
    },
    {
      name: "Butter",
      quantity: 3
    },
    {
      name: "Pancake",
      quantity: 10
    },
    {
      name: "egg",
      quantity: 12
    },
  ];
  //constructor
  constructor(public toastCtrl: ToastController, public navCtrl: NavController, public alertController: AlertController) { }
//removing items function
  async removeItem(item,index) {
    this.items.splice(index,1);
    console.log("Removing Item - ", item,index);
    const toast = await this.toastCtrl.create({
      message: 'Removing Item - ' + item.name + " ...",
      duration: 3000
    });
    toast.present();
   
  }
  //adding function that is calling addItemPrompt for detail input
 addItem() {
    console.log("Removing Item - ");
    this.addItemPrompt();
  }



  async addItemPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Input Item Detail',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'NAME'
        },
        {
          name: 'quantity',
          type: 'text',
          id: 'name2-id',
          placeholder: 'QUANTITY'
        }], buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          }, {
            text: 'Ok',
            handler: item => {
              console.log('Confirm Ok',item);
              this.items.push(item);
              console.log(this.items);
            }
          }
        ]
    });
    await alert.present();
  }
}
