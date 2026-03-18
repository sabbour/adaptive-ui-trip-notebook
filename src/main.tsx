import React from 'react';
import ReactDOM from 'react-dom/client';
import { registerPackWithSkills } from '@sabbour/adaptive-ui-core';
import { createTravelDataPack } from '@sabbour/adaptive-ui-travel-data-pack';
import { createGoogleMapsPack } from '@sabbour/adaptive-ui-google-maps-pack';
import { createGoogleFlightsPack } from '@sabbour/adaptive-ui-google-flights-pack';
import '@sabbour/adaptive-ui-core/css/adaptive.css';
import './css/travel-theme.css';

// Register packs
registerPackWithSkills(createTravelDataPack());
registerPackWithSkills(createGoogleMapsPack());
registerPackWithSkills(createGoogleFlightsPack());

// Import and render the app (self-registers via registerApp)
import './TravelApp';

import { AppRouter } from '@sabbour/adaptive-ui-core';

ReactDOM.createRoot(document.getElementById('root')!).render(
  React.createElement(React.StrictMode, null,
    React.createElement(AppRouter)
  )
);
