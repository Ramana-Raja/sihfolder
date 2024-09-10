import React from 'react';
import { useLocation } from 'react-router-dom';

const ResultsPage = () => {
  const query = new URLSearchParams(useLocation().search);
  const score = query.get('score');

  // Inline styles
  const styles = {
    container: {
      maxWidth: '600px',
      margin: 'auto',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    score: {
      fontSize: '24px',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.container}>
      <h1>Your Results</h1>
      <p style={styles.score}>Your score: {score}</p>
    </div>
  );
};

export default ResultsPage;






