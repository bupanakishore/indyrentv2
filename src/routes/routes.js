import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Apply from "../components/apply/Apply";
import ApplicationSuccessPage from "../components/apply/pages/ApplicationSuccessPage";
import NotEligiblePage from "../components/apply/pages/NotEligiblePage";
import QuestionsPage from "../components/apply/pages/QuestionsPage";
import Dashboard from "../components/dashboard/Dashboard";
import AddProperty from "../components/dashboard/pages/AddProperty";
import ManageAddress from "../components/dashboard/pages/ManageAddress";
import BenifitAddress from "../components/landlord/benifitAddress";
import ConfirmDetailsLandlord from "../components/landlord/confirmDetails";
import EnterEvictionCase from "../components/landlord/enterEvictionCase";
import EvictionCase from "../components/landlord/evictionCase";
import StartApplication from "../components/landlord/startApplication";
import TenantAddress from "../components/landlord/tenantDetails/tenantAddress";
import TenantDetails from "../components/landlord/tenantDetails/tenantDetails";
import TenantName from "../components/landlord/tenantDetails/tenantName";
import TenantContact from "../components/landlord/tenantDetails/contactDetails";
import TenantDue from "../components/landlord/tenantDue";
import Onboarding from "../components/onboarding/Onboarding";
import AddAddress from "../components/onboarding/pages/AddAddress";
import ConfirmDetails from "../components/onboarding/pages/ConfirmDetails";
import OnboardingSuccess from "../components/onboarding/pages/OnboardingSuccess";
import OtpPage from "../components/onboarding/pages/OtpPage";
import StartPage from "../components/onboarding/pages/StartPage";
import VerifyPhone from "../components/onboarding/pages/VerifyPhone";
import AddSupport from "../components/tenant/additionalSupport/additionalSupport";
import CommunityCode from "../components/tenant/additionalSupport/communitycode";
import EnterHelper from "../components/tenant/additionalSupport/enterHelper";
import IsHelperPage from "../components/tenant/additionalSupport/isHelper";
import SupportRecieved from "../components/tenant/additionalSupport/recievedSupport";
import SupportNeeded from "../components/tenant/additionalSupport/support";
import ThanksPage from "../components/tenant/additionalSupport/thanks";
import AddFamily from "../components/tenant/familyMembers/addFamily";
import AddMember from "../components/tenant/familyMembers/addMember";
import EnterIncome from "../components/tenant/householdIncome/enterIncome";
import ExpectIncome from "../components/tenant/householdIncome/expectIncome";
import HouseIncome from "../components/tenant/householdIncome/hoseIncome";
import OptionsApply from "../components/tenant/householdIncome/optionsApply";
import Unemployment from "../components/tenant/householdIncome/unemployment";
import Assistance from "../components/tenant/rentalAssistance/assistance";
import EnterRentDue from "../components/tenant/rentalAssistance/enterRentDue";
import PrevRent from "../components/tenant/rentalAssistance/prevRent";
import Rent from "../components/tenant/rentalAssistance/rent";
import RentBehindQuestion from "../components/tenant/rentalAssistance/rentBehindQuestion";
import Acknowledgement from "../components/tenant/submitApplication/acknowledgement";
import Duplication from "../components/tenant/submitApplication/duplication";
import EnterEmail from "../components/tenant/submitApplication/enterEmail";
import Selfcert from "../components/tenant/submitApplication/selfcert";
import SubmitAppLayout from "../components/tenant/submitApplication/submitApp";
import TenantHome from "../components/tenant/TenantHome";
import RecievePay from "../components/landlord/rentAgreement/recievePay";
import ExpiredLease from "../components/landlord/rentAgreement/expiredLease";
import RentAgreement from "../components/landlord/rentAgreement/rentAgreement";
import SelectDues from "../components/landlord/rentAgreement/selectDues";
import UploadLease from "../components/landlord/rentAgreement/uploadLease";
import Confirmation from "../components/landlord/confirmation/confirmation";
import ConfirmForm from "../components/landlord/confirmation/confirmForm";
import W9Form from "../components/landlord/confirmation/w9Form";
import SuccessForm from "../components/landlord/confirmation/successForm";

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
        <Route path="/tenant/income/expected" element={<ExpectIncome />} />
        <Route path="/tenant/income/enterIcome" element={<EnterIncome />} />
        <Route path="/tenant/income/unemployed" element={<Unemployment />} />
      </Route>
      <Route path="/tenant/rent" element={<Rent />}>
        <Route index element={<RentBehindQuestion />} />
        <Route path="/tenant/rent/rentdue" element={<EnterRentDue />} />
        <Route path="/tenant/rent/prevrent" element={<PrevRent />} />
        <Route path="/tenant/rent/assistance" element={<Assistance />} />
        <Route path="/tenant/rent/billIncluded" element={<Unemployment />} />
        <Route path="/tenant/rent/billDue" element={<Unemployment />} />
        <Route path="/tenant/rent/uploadBill" element={<Unemployment />} />
      </Route>
      <Route path="/tenant/support" element={<AddSupport />}>
        <Route index element={<SupportNeeded />} />
        <Route path="/tenant/support/thanks" element={<ThanksPage />} />
        <Route path="/tenant/support/recieved" element={<SupportRecieved />} />
        <Route path="/tenant/support/helping" element={<IsHelperPage />} />
        <Route path="/tenant/support/enterhelper" element={<EnterHelper />} />
        <Route
          path="/tenant/support/communitycode"
          element={<CommunityCode />}
        />
      </Route>

      <Route path="/tenant/submitapplication" element={<SubmitAppLayout />}>
        <Route index element={<EnterEmail />} />
        <Route
          path="/tenant/submitapplication/selfcert"
          element={<Selfcert />}
        />
        <Route
          path="/tenant/submitapplication/ducplication"
          element={<Duplication />}
        />
        <Route
          path="/tenant/submitapplication/acknowledgement"
          element={<Acknowledgement />}
        />
      </Route>

      <Route path="/tenant/sorry" element={<NotEligiblePage />} />
      <Route path="/tenant/success" element={<ApplicationSuccessPage />} />

      {/* Landord routes */}
      <Route path="/landlord/dashboard" element={<Dashboard />}>
        <Route index element={<ManageAddress />} />
      </Route>
      <Route path="/landlord/addproperty" element={<AddProperty />} />

      <Route path="/landlord/evictioncase" element={<EvictionCase />} />
      <Route
        path="/landlord/enterevictioncase"
        element={<EnterEvictionCase />}
      />
      <Route path="/landlord/tenantdue" element={<TenantDue />} />
      <Route
        path="/landlord/confirmdetails"
        element={<ConfirmDetailsLandlord />}
      />
      <Route path="/landlord/benifitaddress" element={<BenifitAddress />} />
      <Route path="/landlord/startapplication" element={<StartApplication />} />

      <Route path="/landlord/tenantdetails" element={<TenantDetails />}>
        <Route index element={<TenantName />} />
        {/* name */}
        <Route
          path="/landlord/tenantdetails/contact"
          element={<TenantContact />}
        />
        <Route
          path="/landlord/tenantdetails/address"
          element={<TenantAddress />}
        />
      </Route>

      <Route path="/landlord/rentagreement" element={<RentAgreement />}>
        <Route index element={<RecievePay />} />
        {/* recieve payment */}
        <Route
          path="/landlord/rentagreement/lease"
          element={<ExpiredLease />}
        />
        <Route
          path="/landlord/rentagreement/selectdues"
          element={<SelectDues />}
        />
        <Route
          path="/landlord/rentagreement/uploadlease"
          element={<UploadLease />}
        />
      </Route>

      <Route path="/landlord/confirmation" element={<Confirmation />}>
        <Route index element={<ConfirmForm />} />
        {/* confirmation */}
        <Route path="/landlord/confirmation/w9" element={<W9Form />} />
        <Route
          path="/landlord/confirmation/success"
          element={<SuccessForm />}
        />
      </Route>
    </Routes>
  );
};

export default Routing;
