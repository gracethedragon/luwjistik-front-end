import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const LoginPage = lazy(() => import ('./components/Login'))
const Dashboard = lazy(() => import ('./components/Dashboard'))
const CreateOrder = lazy(() => import ('./components/CreateOrder'))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
		<Suspense
			// fallback={
			// 	<div>
			// 		<CircularStatic />
			// 	</div>
			// }
		>
			<Routes>
				<Route path='' element={<LoginPage />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='create' element={<CreateOrder />} />
				
			</Routes>
		</Suspense>
	</BrowserRouter>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
