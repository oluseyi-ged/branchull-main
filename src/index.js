import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Signature from './routes/signature';
import Create from './routes/createSignature/create';
import LinkShortner from './routes/Linkshortner';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import General from './routes/createSignature/general';
import Social from './routes/createSignature/social';
import Style from './routes/createSignature/style';
import Layout from './routes/createSignature/layout';
import AddOn from './routes/createSignature/addOns';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path="home" element={<App />} />
      <Route path="linkShortner" element={<LinkShortner />} />
      <Route path="emailSignature" element={<Signature />} />
      <Route path="create" element={<Create />}>
        <Route path="general" element={<General />} />
        <Route path="social" element={<Social />} />
        <Route path="style" element={<Style />} />
        <Route path="addOns" element={<AddOn />} />

        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
        <Route
          index
          element={<General />}
        />
      </Route>
      <Route path="layout" element={<Layout />} />
      <Route
        index
        element={<App />}
      />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />

    </Routes>

  </BrowserRouter>

);


