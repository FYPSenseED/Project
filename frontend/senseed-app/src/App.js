import React from 'react';
import UploadForm from './components/UploadForm';
import FeedbackDisplay from './components/FeedbackDisplay';

function App() {
  return (
    <div className="App">
      <h1>SenseEd Evaluation</h1>
      <UploadForm />
      <FeedbackDisplay />
    </div>
  );
}

export default App;
