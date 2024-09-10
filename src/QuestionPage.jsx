import React, { useEffect, useState } from 'react';
import axios from 'axios';

const QuestionPage = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.post('http://localhost:8000/dataset', {
          num_questions: 5, // Adjust as needed
        });
        setQuestions(response.data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };
    fetchQuestions();
  }, []);

  const handleAnswerChange = (questionIndex, answer) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: answer,
    });
  };

  const handleSubmit = () => {
    let score = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.answer) {
        score++;
      }
    });
    setScore(score);
    window.open(`/results?score=${score}`, '_blank'); // Open results in a new tab
  };

  // Inline styles
  const styles = {
    container: {
      maxWidth: '800px',
      margin: 'auto',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    questionItem: {
      marginBottom: '20px',
    },
    optionLabel: {
      display: 'block',
      margin: '8px 0',
    },
    submitButton: {
      backgroundColor: '#4CAF50',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
    },
    score: {
      marginTop: '20px',
      fontSize: '20px',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.container}>
      <h1>Questions</h1>
      {questions.map((question, index) => (
        <div key={index} style={styles.questionItem}>
          <p>{question.question}</p>
          {Object.entries(question.options).map(([key, option]) => (
            <label key={key} style={styles.optionLabel}>
              <input
                type="radio"
                name={`question-${index}`}
                value={key}
                checked={selectedAnswers[index] === key}
                onChange={() => handleAnswerChange(index, key)}
              />
              {key}: {option}
            </label>
          ))}
        </div>
      ))}
      <button style={styles.submitButton} onClick={handleSubmit}>
        Submit
      </button>
      {score !== null && <p style={styles.score}>Your score: {score}</p>}
    </div>
  );
};

export default QuestionPage;






