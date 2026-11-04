import React from 'react';
import { StatusBar } from 'expo-status-bar';
import StudentDirectory from './components/StudentDirectory';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <StudentDirectory />
    </>
  );
}