import React from 'react';
import ReactDOM from 'react-dom';
import HomeScreen from './components/Home/Home';

import './styles.css';

function App() {
	return <HomeScreen />;
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
