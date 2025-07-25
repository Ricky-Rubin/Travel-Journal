import { createRoot } from 'react-dom/client';
import { App } from './App.jsx';

const theElement = createRoot(document.getElementById('root'));
theElement.render(
  <App />
)