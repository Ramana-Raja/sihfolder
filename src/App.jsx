// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuestionPage from './Questionpage';
import ResultsPage from './ResultsPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<QuestionPage />} />
                <Route path="/results" element={<ResultsPage />} />
            </Routes>
        </Router>
    );
};

export default App;







