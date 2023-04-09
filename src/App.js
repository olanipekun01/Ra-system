import logo from './logo.svg';
import './App.css';

// Auth Pages
import SignIn from './pages/authPages/SignIn';
import SignUpOTPPage from './pages/authPages/SignUpOTPPage';
import AccountSetUpIntro from './pages/authPages/AccountSetUpIntro';
import AccountSetUp from './pages/authPages/AccountSetUp';

// Profile pages
import Profile from './pages/profilePages/ProfileAccount';
import ProfileAdministration from './pages/profilePages/ProfileAdministration';
import ProfileAdministrationInviteMembers from './pages/profilePages/ProfileAdministrationInviteMembers';
import ProfileBillingPaymentMethod from './pages/profilePages/ProfileBillingPaymentMethod';
import ProfileBillingPlans from './pages/profilePages/ProfileBillingPlans';

// Dashboards
import DashboardNew from './pages/DashboardNew';
import WorkManagementDashboard from './pages/dashboardPage/WorkManagementDashboard';



import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/signin' element={<SignIn />} />
          <Route exact path='/signup-otp' element={<SignUpOTPPage />} />
          <Route exact path='/account-setup-intro' element={<AccountSetUpIntro />} />
          <Route exact path='/account-setUp' element={<AccountSetUp />} />


          <Route exact path='/work-management' element={<WorkManagementDashboard />} />
          <Route exact path='/dashboard' element={<DashboardNew />} />

          <Route exact path='/profile' element={<Profile />} />
          <Route exact path='/profile-admin/organization-detail' element={<ProfileAdministration />} />
          <Route exact path='/profile-admin/invite-members' element={<ProfileAdministrationInviteMembers />} />
          <Route exact path='/profile-billing/payment-method' element={<ProfileBillingPaymentMethod />} />
          <Route exact path='/profile-billing/plans' element={<ProfileBillingPlans />} />
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
