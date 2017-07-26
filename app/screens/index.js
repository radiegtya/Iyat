import {Navigation} from 'react-native-navigation';

//import tabs screen
import Home from './tabs/Home';
import Histories from './tabs/Histories';
import Settings from './tabs/Settings';

//import push screen
import SignIn from './push/SignIn';
import PinVerification from './push/PinVerification';
import PickLocation from './push/PickLocation';
import Finding from './push/Finding';
import ContactUs from './push/ContactUs';
import Faq from './push/Faq';

export function registerScreens(){
  //tabs
  Navigation.registerComponent('tabs.Home', ()=> Home);
  Navigation.registerComponent('tabs.Histories', ()=> Histories);
  Navigation.registerComponent('tabs.Settings', ()=> Settings);

  //push
  Navigation.registerComponent('push.SignIn', ()=> SignIn);
  Navigation.registerComponent('push.PinVerification', ()=> PinVerification);
  Navigation.registerComponent('push.PickLocation', ()=> PickLocation);
  Navigation.registerComponent('push.Finding', ()=> Finding);
  Navigation.registerComponent('push.ContactUs', ()=> ContactUs);
  Navigation.registerComponent('push.Faq', ()=> Faq);
}

export function startSingleScreenApp(){
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'push.SignIn', // unique ID registered with Navigation.registerScreen
      title: 'Your Phone', // title of the screen as appears in the nav bar (optional)
    },
  });
}

export function startTabBasedApp(){
  Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'Home',
        screen: 'tabs.Home', // this is a registered name for a screen
        title: 'Iyat',
        icon: require('../img/home-inactive.png'),
        // selectedIcon: require('../img/home-active.png'), // iOS only
        navigatorStyle: {
          navBarHidden: true
        }
      },
      {
        label: 'Histories',
        screen: 'tabs.Histories',
        title: 'Chats',
        icon: require('../img/history-inactive.png'),
        // selectedIcon: require('../img/history-active.png'), // iOS only
        navigatorStyle: {
          navBarHidden: true
        }
      },
      {
        label: 'Settings',
        screen: 'tabs.Settings',
        title: 'Settings',
        icon: require('../img/settings-inactive.png'),
        // selectedIcon: require('../img/settings-active.png'), // iOS only
        navigatorStyle: {
          navBarHidden: true
        }
      }
    ],
    tabsStyle: {
      tabBarBackgroundColor: '#282C34',
      tabBarSelectedButtonColor: '#FFB55C'
    }
  });
}
