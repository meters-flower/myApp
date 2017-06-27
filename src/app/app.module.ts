import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';

import { TutorialPage } from '../pages/tutorial/tutorial';
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { TabsPage } from '../pages/tabs/tabs';
import { ListMasterPage } from '../pages/list-master/list-master';
import { SearchPage } from '../pages/search/search';
import { SettingsPage } from '../pages/settings/settings';
import { ItemCreatePage } from '../pages/item-create/item-create';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';

import { ItemService } from '../providers/item.service';
import { UserService } from '../providers/user.service';

@NgModule({
  declarations: [
    MyApp,
    TutorialPage,
    WelcomePage,
    LoginPage,
    SignupPage,
    TabsPage,
    ListMasterPage,    
    SearchPage,
    SettingsPage,    
    HelloIonicPage,
    ItemDetailsPage,
    ItemCreatePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TutorialPage,   
    WelcomePage, 
    LoginPage,
    SignupPage,
    TabsPage,
    ListMasterPage,    
    SearchPage,
    SettingsPage,        
    HelloIonicPage,
    ItemDetailsPage,
    ItemCreatePage,
    ListPage
  ],
  providers: [
    ItemService,
    UserService,
    StatusBar,
    SplashScreen,
    Geolocation,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
