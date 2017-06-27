import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Camera } from '@ionic-native/camera';

@Component({
  selector: 'page-item-create',
  templateUrl: 'item-create.html'
})
export class ItemCreatePage {

  isReadyToSave: boolean;
  item: any;
  form: FormGroup;

  constructor(
  	public navCtrl: NavController, 
  	public viewCtrl: ViewController,
  	public formBuilder: FormBuilder,
    public camera: Camera
  ) {
  	/* angular表单的一种用法，方便验证 */
    this.form = formBuilder.group({
      profilePic: [''],
      name: ['', Validators.required],
      about: ['']
    });

    // 监听表单数据变化
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
  }

  /* 拍照*/
  getPicture() {
    if (Camera['installed']()) {
      this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        targetWidth: 96,
        targetHeight: 96
      }).then((data) => {
        this.form.patchValue({ 'profilePic': 'data:image/jpg;base64,' + data });
      }, (err) => {
        alert('Unable to take photo');
      })
    } else {
      alert('没有相机');
    }
  }

  /* 取消，直接关闭当前的viewController */
  cancel() {
    this.viewCtrl.dismiss();
  }

  /* 提交，关闭当前的 viewController，并返回数据 */
  done() {
  	if (!this.form.valid) { return; }
    this.viewCtrl.dismiss(this.form.value);
  }

}
