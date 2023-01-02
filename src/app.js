import React from 'react'; //require(react) ES5 and theese ES-6 
import { createRoot } from 'react-dom/client';
import IndecisionApp from './components/IndecisionApp'
import 'normalize.css/normalize.css';
import './styles/styles.scss'
const root = createRoot(document.getElementById('app'));

root.render(<IndecisionApp/>);