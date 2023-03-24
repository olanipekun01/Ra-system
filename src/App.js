import logo from './logo.svg';
import './App.css';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import SignUpOTPPage from './pages/SignUpOTPPage';
// import AccountSetUpIntro from './pages/AccountSetUpIntro';
// import AccountSetUp from './pages/AccountSetUp';
// import Profile from './pages/Profile';
// import ProfileAdministration from './pages/ProfileAdministration';
// import DashboardNew from './pages/DashboardNew';
// import WorkManagementDashboard from './pages/WorkManagementDashboard';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<SignUpOTPPage />} />
          {/* <Route exact path='/accountSetUp' element={<AccountSetUp />} /> */}
        </Routes>
      </BrowserRouter>
      {/* <SignIn /> */}
      {/* <SignUp /> */}
      {/* <SignUpOTPPage /> */}
      {/* <AccountSetUpIntro /> */}
      {/* <AccountSetUp /> */}
    </div>
  );
}

export default App;
