"use client";
import React, { useEffect, useState } from 'react';
import { UserRole, AppState } from '../types';
import Login from './Auth/Login';
import AdminDashboard from './Admin/AdminDashboard';
import EmployeeDashboard from './Employee/EmployeeDashboard';
import { initialData } from '../constants';

const RootApp: React.FC = () => {
  const [user, setUser] = useState<{ role: UserRole; id: string } | null>(null);
  const [state, setState] = useState<AppState>(() => {
    if (typeof window === 'undefined') return initialData;
    const saved = typeof window !== 'undefined' ? localStorage.getItem('construplan_state') : null;
    return saved ? JSON.parse(saved) : initialData;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('construplan_state', JSON.stringify(state));
    }
  }, [state]);

  const handleLogout = () => {
    setUser(null);
  };

  if (!user) {
    return <Login onLogin={setUser} employees={state.employees} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {user.role === UserRole.ADMIN ? (
        <AdminDashboard 
          state={state} 
          setState={setState} 
          onLogout={handleLogout} 
        />
      ) : (
        <EmployeeDashboard 
          state={state} 
          employeeId={user.id} 
          onLogout={handleLogout} 
        />
      )}
    </div>
  );
};

export default RootApp;
