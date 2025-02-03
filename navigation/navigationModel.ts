
export type RootStackParamList = {
    Main: undefined,
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

