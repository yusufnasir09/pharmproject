
import * as React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

import { PharmacyScreen } from './src/features/restaurants/screens/pharmacy.screen';



export default function App() {
  return (
    <>
      <PharmacyScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}


