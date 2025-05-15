import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Customers from './pages/Customers';
import Employees from './pages/Employees';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';
import Login from './pages/Login';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Routes>
          <Route path="" element={<Login />} />
          <Route path="dashboard" element={
            <Layout>
              <Dashboard />
            </Layout>
          } />
          <Route path="products" element={
            <Layout>
              <Products />
            </Layout>
          } />
          <Route path="customers" element={
            <Layout>
              <Customers />
            </Layout>
          } />
          <Route path="employees" element={
            <Layout>
              <Employees />
            </Layout>
          } />
          <Route path="reports" element={
            <Layout>
              <Reports />
            </Layout>
          } />
          <Route path="settings" element={
            <Layout>
              <Settings />
            </Layout>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
