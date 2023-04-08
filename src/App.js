import logo from './logo.svg';
import './App.css';
import SignIn from './pages/SignIn';
import SignUpOTPPage from './pages/SignUpOTPPage';
import AccountSetUpIntro from './pages/AccountSetUpIntro';
import AccountSetUp from './pages/AccountSetUp';
import Profile from './pages/Profile';
import ProfileAdministration from './pages/ProfileAdministration';
import DashboardNew from './pages/DashboardNew';
import WorkManagementDashboard from './pages/WorkManagementDashboard';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfileAdministrationInviteMembers from './pages/ProfileAdministrationInviteMembers';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<SignIn />} />
          <Route exact path='/signup-otp' element={<SignUpOTPPage />} />
          <Route exact path='/account-setup-intro' element={<AccountSetUpIntro />} />
          <Route exact path='/account-setUp' element={<AccountSetUp />} />
          <Route exact path='/work-management' element={<WorkManagementDashboard />} />
          <Route exact path='/dashboard' element={<DashboardNew />} />

          <Route exact path='/profile' element={<Profile />} />
          <Route exact path='/profile-admin/organization-detail' element={<ProfileAdministration />} />
          <Route exact path='/profile-admin/invite-members' element={<ProfileAdministrationInviteMembers />} />
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
