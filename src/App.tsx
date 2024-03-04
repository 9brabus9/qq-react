import { Routes, Route } from "react-router-dom";
import MainPage from "@/pages/MainPage";
import MainLayout from '@/layouts/MainLayout';
import Login from "@/pages/Login";
import SignUpPage from "@/pages/SignUpPage"
import ResetPasswordPage from "@/pages/ResetPasswordPage"
import ErrorPage from "@/pages/ErrorPage";
import ProtectedRoute from '@/route/ProtectedRoute'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const queryClient = new QueryClient()


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<MainPage />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/new-user" element={<SignUpPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App