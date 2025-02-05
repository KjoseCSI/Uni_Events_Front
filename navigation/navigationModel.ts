
export type RootStackParamList = {
    MainScreens: undefined,
    AuthScreens: undefined,
    MainEvents: undefined; 
    EventDetails: { currentIndex: number }; 
    MapScreen: undefined;
    LoginPage: undefined;
    RegistrationPage: undefined;
  };

  
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

