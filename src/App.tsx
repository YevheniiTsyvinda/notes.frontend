import React,{FC, ReactElement} from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import userManager, {loadUser, signinRedirect} from './auth/user-service';
import AuthProvider from './auth/auth-provider';
import SigninOidc from './auth/SigninOidc';
import SignoutOidc from './auth/SignoutOidc';
import NoteList from './notes/NoteList';

import './App.css';

const App: FC<{}> =(): ReactElement => {
  loadUser();
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={()=> signinRedirect()}>Login</button>
        <AuthProvider userManager={userManager}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<NoteList />} />
              <Route path='/signout-oidc' element={<SignoutOidc />} />
              <Route path='/signin-oidc' element={<SigninOidc />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </header>
    </div>
  );
}

export default App;
