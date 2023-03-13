import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

// Components
import ClientPortfolio from "./components/Dashboard/ClientPortfolio"
import Dashboard from "./components/Dashboard/Dashboard"
import { GuaranteeView } from "./components/Dashboard/Guarantee"
import ClaimFiles from "./components/Dashboard/GuaranteeViews/ClaimFiles"
import { RegisterGuarantee } from "./components/Dashboard/GuaranteeViews/RegisterGuarantee"
import { GuaranteeConsultation } from "./components/Dashboard/GuaranteeViews/GuaranteeConsultation"
import Records from "./components/Dashboard/GuaranteeViews/Consultation/Records"
import { Home } from "./components/Dashboard/Home"
import Processes from "./components/Dashboard/Processes"
import CollectionManagement from "./components/Dashboard/Processes/CollectionManagement"
import ManageInterests from "./components/Dashboard/Processes/ManageInterests"
import ProductCreation from "./components/Dashboard/Processes/ProductCreation"
import System from "./components/Dashboard/Processes/System"
import WarrantyAdjustment from "./components/Dashboard/Processes/WarrantyAdjustment"
import Reports from "./components/Dashboard/Reports"
import SearchList from "./components/Dashboard/Reports/SearchList"
import Statistics from "./components/Dashboard/Reports/Statistics"
import { UserView } from "./components/Dashboard/Users"
import { MyProfile } from "./components/Dashboard/UsersViews/Profile"
import { Roles } from "./components/Dashboard/UsersViews/Roles"
import { UserManagement } from "./components/Dashboard/UsersViews/UserManagement"
import FilterSearch from "./components/Dashboard/UsersViews/UserManagement/FilterSearch"
import Manage from "./components/Dashboard/UsersViews/UserManagement/Manage"
import UserList from "./components/Dashboard/UsersViews/UserManagement/UserList"
import ChangePassword from "./components/Login/ChangePassword"
import ForgotPass from "./components/Login/ForgotPass"
import { FormLogin } from "./components/Login/LoginForm"
import ReduxPrueba from "./components/Login/ReduxPrueba"
import TokenValidation from "./components/Login/TokenValidation"
import NotFound from "./components/NotFound"
import Updates from "./components/Dashboard/GuaranteeViews/Consultation/Updates"
import Claims from "./components/Dashboard/GuaranteeViews/Consultation/Claims"
import RecoveryPayments from "./components/Dashboard/GuaranteeViews/Consultation/RecoveryPayments"
import PaymentsPerClaim from "./components/Dashboard/GuaranteeViews/Consultation/PaymentsPerClaim"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormLogin />} />
        <Route path="/login" element={<FormLogin />} />
        <Route path="/login/token-validation" element={<TokenValidation />} />
        <Route path="/login/forgot-password" element={<ForgotPass />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard/home" element={<Home />} />

          <Route path="/dashboard/users" element={<UserView />}>
            <Route path="/dashboard/users/profile" element={<MyProfile />} />
            <Route path="/dashboard/users/management" element={<UserManagement />}>
              <Route path="/dashboard/users/management/manage" element={<Manage />} />
              <Route path="/dashboard/users/management/filter-search" element={<FilterSearch />} />
              <Route path="/dashboard/users/management/user-list" element={<UserList />} />
            </Route>
            <Route path="/dashboard/users/roles" element={<Roles />} />
          </Route>

          <Route path="/dashboard/guarantee" element={<GuaranteeView />}>
            <Route path="/dashboard/guarantee/register_guarantee" element={<RegisterGuarantee />} />
            <Route path="/dashboard/guarantee/consultation" element={<GuaranteeConsultation />}>
              <Route path="/dashboard/guarantee/consultation/records" element={<Records />} />
              <Route path="/dashboard/guarantee/consultation/updates" element={<Updates />} />
              <Route path="/dashboard/guarantee/consultation/claims" element={<Claims />} />
              <Route path="/dashboard/guarantee/consultation/recovery-payments" element={<RecoveryPayments />} />
              <Route path="/dashboard/guarantee/consultation/payments-per-claim" element={<PaymentsPerClaim />} />
            </Route>
            <Route path="/dashboard/guarantee/files_guarantee" element={<ClaimFiles />} />
          </Route>

          <Route path="/dashboard/reports" element={<Reports />}>
            <Route path="/dashboard/reports/search-list" element={<SearchList />} />
            <Route path="/dashboard/reports/statistics" element={<Statistics />} />
          </Route>

          <Route path="/dashboard/processes" element={<Processes />}>
            <Route path="/dashboard/processes/system" element={<System />} />
            <Route path="/dashboard/processes/collection-management" element={<CollectionManagement />} />
            <Route path="/dashboard/processes/warranty-adjustment" element={<WarrantyAdjustment />} />
            <Route path="/dashboard/processes/product-creation" element={<ProductCreation />} />
            <Route path="/dashboard/processes/manage-interests" element={<ManageInterests />} />
          </Route>

          <Route path="/dashboard/client-portfolio" element={<ClientPortfolio />} />
        </Route>
        <Route path="/redux-prueba" element={<ReduxPrueba />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
