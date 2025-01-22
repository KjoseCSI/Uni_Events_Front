import { ImageBackground, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003366',
    justifyContent: 'center',
    padding: 16,

  },
  background :{
    position: 'absolute',
    left: 0,
    right:0,
    top:0,
    height: 1000,
  },
  icon: {
    width: 100,  
    height: 100, 
    marginBottom: 20, 
    alignItems: 'center',
  },
  TitleText: {
    textAlign: 'center',
    marginBottom: 30,
    color: 'white', 
    fontSize: 24,   
    fontWeight: 'bold',
  },
  formContainer: {
    marginBottom: 20,
  },

  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    backgroundColor: '#9095a1',
  },
  
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  
  label: {
    marginLeft: 8,
    color: 'white',
    marginBottom: 40,
  },
  
  linkText: {
    textAlign: 'center',
    marginBottom: 30,
    color: 'white',  
    
  },
  link: {
    color: '#ffffff',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});

export default styles;