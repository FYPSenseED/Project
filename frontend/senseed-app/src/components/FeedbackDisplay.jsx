import React from 'react';

function FeedbackDisplay({ score }) {
  if (!score) return null;
  let message = score > 0.7 ? "Great emotional engagement!" : "Work on expressiveness.";
  return <div>{message}</div>;
}

export default FeedbackDisplay;
