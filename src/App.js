import React,{useState, useEffect} from 'react'
import fire from './fire'
import './App.css';
import Login from './Login';
import Hero from './Hero';

function App() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [PasswordError, setPasswordError] = useState('');
  const [HasAccount, setHasAccount] = useState(false)

  const clearinputs =() =>{
    setEmail('');
    setPassword('');
  }
const clearErrors = () =>{
  setEmailError('');
  setPasswordError('');
}
  const handlelogin = () =>{
  clearErrors();
  fire
  .auth()
  .signInWithEmailAndPassword(email, password)
  .catch(err =>{
    switch(err.code){
      case "auth/invalid-email":
      case "auth/user-disabled":
      case "auth/user-not_found":
        setEmailError(err.message);
        break;
        case "auth/wrong-password":
          setPasswordError(err.message)
          break;
    }
  })
  }
  const handlesignup = () =>{
    clearErrors()
    fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(err =>{
      switch(err.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message);
          break;
          case "auth/weak-password":
            setPasswordError(err.message)
            break;
      }
    })  
  }
  const handlelogout =()=>{
    fire.auth().signOut()
  }
  const authListener =()=>{
    fire.auth().onAuthStateChanged(user =>{
      if(user){
        clearinputs();
        setUser(user)
      }else(
        setUser('')
      )
    })
  }
  useEffect(() => {
    authListener()
  }, [])
  return (
    <div>
      {user ? (<Hero handlelogout={handlelogout}/>     
): (<Login 
email={email} 
setEmail={setEmail} 
password={password} 
setPassword={setPassword}
handlelogin={handlelogin}
handlesignup={handlesignup}
HasAccount={HasAccount}
setHasAccount={setHasAccount}
emailError={emailError}
PasswordError={PasswordError}
/> 
)
}
    </div>
  );
}

export default App;
