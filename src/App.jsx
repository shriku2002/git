import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Auth Feature Imports
import LoginPage from "./features/auth/LoginPage";
import SignUpPage from "./features/auth/SignUpPage";

// Onboarding Feature Imports
import EmailVerifiedPage from "./features/onboarding/EmailVerifiedPage";
import UserPurposePage from "./features/onboarding/UserPurposePage";
import UserRolePage from "./features/onboarding/UserRolePage";
import UserDetailsPage from "./features/onboarding/UserDetailsPage";
import CreateOrganizationPage from "./features/onboarding/CreateOrganizationPage";
import CreateCompanyPage from "./features/onboarding/CreateCompanyPage";
import VerificationPage from "./features/onboarding/VerificationPage";
import InviteTeamPage from "./features/onboarding/InviteTeamPage";
import LeadsPage from "./features/LeadsPage/LeadsPage";
import LeadsWelcomePage from "./features/LeadsPage/LeadsWelcomePage";
import LeadDetailsPage from "./features/LeadsPage/LeadDetailsPage";
import ProjectWelcomePage from "./features/ProjectPage/ProjectWelcomePage";
import WelcomePopup from "./components/UI/WelcomePopup";

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth Routes */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        {/* Onboarding Routes */}
        <Route path="/email-verified" element={<EmailVerifiedPage />} />
        <Route path="/user-purpose" element={<UserPurposePage />} />
        <Route path="/select-role" element={<UserRolePage />} />
        <Route path="/user-details" element={<UserDetailsPage />} />
        <Route path="/create-organization" element={<CreateOrganizationPage />} />
        <Route path="/create-company" element={<CreateCompanyPage />} />
        <Route path="/verification" element={<VerificationPage />} />
        <Route path="/invite-team" element={<InviteTeamPage />} />

        {/* LeadsPage */}
        <Route path="/leads" element={<LeadsPage />} />
        <Route path="/leads/:id" element={<LeadDetailsPage />} />
        <Route path="/leads-welcome" element={<LeadsWelcomePage />} />
        <Route path="/project-welcome" element={<ProjectWelcomePage />} />
        <Route path="/wellCome-PopUp-Lead" element={<WelcomePopup />} />

        <Route
          path="/dashboard"
          element={
            <div>
              <h1>Dashboard</h1>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;