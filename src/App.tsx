import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Dashboard } from '@/pages/Dashboard';
import { Team } from '@/pages/Team';
import { Onboarding } from '@/pages/Onboarding';
import { Memos } from '@/pages/Memos';
import { AskNimothy } from '@/pages/AskNimothy';
import { SupplyOffice } from '@/pages/SupplyOffice';
import { Incidents } from '@/pages/Incidents';
import { SinOps } from '@/pages/SinOps';
import { Restricted } from '@/pages/Restricted';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/team"
          element={
            <Layout>
              <Team />
            </Layout>
          }
        />
        <Route
          path="/onboarding"
          element={
            <Layout>
              <Onboarding />
            </Layout>
          }
        />
        <Route
          path="/memos"
          element={
            <Layout>
              <Memos />
            </Layout>
          }
        />
        <Route
          path="/ask-nimothy"
          element={
            <Layout>
              <AskNimothy />
            </Layout>
          }
        />
        <Route
          path="/supply-office"
          element={
            <Layout>
              <SupplyOffice />
            </Layout>
          }
        />
        <Route
          path="/incidents"
          element={
            <Layout>
              <Incidents />
            </Layout>
          }
        />
        <Route
          path="/sinops"
          element={
            <Layout>
              <SinOps />
            </Layout>
          }
        />
        <Route
          path="/restricted"
          element={
            <Layout>
              <Restricted />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
