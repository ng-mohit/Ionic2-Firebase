import {Modal, Page, NavController, ViewController, NavParams} from 'ionic-angular';
import {Component, OnInit, Inject} from '@angular/core';
import { FirebaseRef } from 'angularfire2';

/*
  Generated class for the NewItemPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/new-item/new-item.html',
})
export class NewItemPage {
  error: any;
  constructor(@Inject(FirebaseRef) public ref: Firebase,
              public viewCtrl: ViewController,
              public nav: NavController, private _navParams: NavParams) {
                
                console.log("initialize NewItemModal");
              }
              
    /** 
     * this will dismiss the modal page
     */
    dismiss() {
        this.viewCtrl.dismiss();
    }
    
   /**
     * exits the modal with no new item added
     */
    cancelItem(_event) {
        _event.preventDefault();
        this.dismiss()
    }
    
    
    /**
     * adds the item to the path /textItems
     */
    addTheItem(_data) {

        this.ref.child('/textItems')
            .push({
                "title": _data.title,
                "description": _data.description,
                "event_image": 'https://res.cloudinary.com/mohit6210/image/upload/v1463986681/picsee/c5lft99rpsdqgznbksnf.jpg',
                // auth data from the navParam object...
                "user": this._navParams.get("user").email,
                "timestamp": (new Date()).getTime()
            }).then((_data) => {
                console.log(_data)
                this.dismiss()
            }).catch((_error) => {
                console.log(_error)
            })
    }
    
           
}
