import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { StoreProvider } from './components';
import reportWebVitals from './reportWebVitals';

//ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17
// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(
//     <React.StrictMode>
//         <StoreProvider>
//             <BrowserRouter>
//                 <App />
//             </BrowserRouter>
//         </StoreProvider>
//     </React.StrictMode>
// );

ReactDOM.render(
    <React.StrictMode>
        <StoreProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </StoreProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
reportWebVitals();
