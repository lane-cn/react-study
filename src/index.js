import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Routes, Route} from "react-router-dom";
import TodoContainer from './components/TodoContainer';
import About from './components/About';
import Navbar from './components/Navbar';
import './App.css';

ReactDOM.render(
    <React.StrictMode>
        <React.Fragment>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<TodoContainer />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/about/:type" element={<About />} />
                </Routes>
            </Router>
        </React.Fragment>
    </React.StrictMode>, 
    document.getElementById('root')
);
