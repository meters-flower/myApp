import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

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
  	public formBuilder: FormBuilder
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
