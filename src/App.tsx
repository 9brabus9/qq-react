import { Routes, Route } from "react-router-dom";
import MainPage from "@/pages/MainPage";
import MainLayout from '@/layouts/MainLayout';
import Login from "@/pages/Login";
import SignUpPage from "@/pages/SignUpPage"
import ResetPasswordPage from "@/pages/ResetPasswordPage"
import ErrorPage from "@/pages/ErrorPage";
import ProtectedRoutes from '@/route/ProtectedRoutes'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import PublicRoutes from "@/route/PublicRoutes";
import CompaniesPage from "@/pages/CompaniesPage";

const queryClient = new QueryClient()


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/location" element={<CompaniesPage />} />
          </Route>
          <Route element={<PublicRoutes />}>
            <Route path="/login" element={<Login />} />
            <Route path="/new-user" element={<SignUpPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App