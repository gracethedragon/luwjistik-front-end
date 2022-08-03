import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/Login'
import Dashboard from './components/Dashboard'
import CreateOrder from './components/CreateOrder'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename={process.env.PORT}>
    {/* <App /> */}
			<Routes>
				<Route path='/' element={<LoginPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        {/* <Route path='/dashboard' element={session_token?<Dashboard />: <Navigate to ="/"/>} /> */}
        <Route path='/create' element={<CreateOrder />}  />
				
			</Routes>
	</BrowserRouter>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
