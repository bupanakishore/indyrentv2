import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Apply from "../components/apply/Apply";
import ApplicationSuccessPage from "../components/apply/pages/ApplicationSuccessPage";
import NotEligiblePage from "../components/apply/pages/NotEligiblePage";
import QuestionsPage from "../components/apply/pages/QuestionsPage";
import Dashboard from "../components/dashboard/Dashboard";
import AddProperty from "../components/dashboard/pages/AddProperty";
import ManageAddress from "../components/dashboard/pages/ManageAddress";
import Onboarding from "../components/onboarding/Onboarding";
import AddAddress from "../components/onboarding/pages/AddAddress";
import ConfirmDetails from "../components/onboarding/pages/ConfirmDetails";
import OnboardingSuccess from "../components/onboarding/pages/OnboardingSuccess";
import OtpPage from "../components/onboarding/pages/OtpPage";
import StartPage from "../components/onboarding/pages/StartPage";
import VerifyPhone from "../components/onboarding/pages/VerifyPhone";
import AddFamily from "../components/tenant/familyMembers/addFamily";
import AddMember from "../components/tenant/familyMembers/addMember";
import HouseIncome from "../components/tenant/householdIncome/hoseIncome";
import OptionsApply from "../components/tenant/householdIncome/optionsApply";
import TenantHome from "../components/tenant/TenantHome";

const Routing = () => {
  return (
    <Routes>
      <Route path="/onboarding" element={<Onboarding />}>
        <Route index element={<VerifyPhone />} />
        <Route path="/onboarding/otp" element={<OtpPage />} />
        <Route path="/onboarding/address" element={<AddAddress />} />
        <Route path="/onboarding/confirm" element={<ConfirmDetails />} />
        <Route path="/onboarding/success" element={<OnboardingSuccess />} />
      </Route>
      <Route exact path="/" element={<StartPage />} />
      <Route path="/tenant/apply" element={<Apply />}>
        <Route index element={<QuestionsPage />} />
      </Route>
      <Route path="/tenant" element={<TenantHome />} />
      <Route path="/tenant/family" element={<AddFamily />} />
      <Route path="/tenant/family/add" element={<AddMember />} />
      <Route path="/tenant/income" element={<HouseIncome />}>
        <Route index element={<OptionsApply />} />
      </Route>
      <Route path="/tenant/rent" element={<ConfirmDetails />} />
      <Route path="/tenant/support" element={<OnboardingSuccess />} />

      <Route path="/tenant/sorry" element={<NotEligiblePage />} />
      <Route path="/tenant/success" element={<ApplicationSuccessPage />} />
      <Route path="/landlord/dashboard" element={<Dashboard />}>
        <Route index element={<ManageAddress />} />
      </Route>
      <Route path="/landlord/addproperty" element={<AddProperty />} />
    </Routes>
  );
};

export default Routing;
