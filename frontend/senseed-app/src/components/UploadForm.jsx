import React, { useState } from 'react';
import axios from 'axios';

function UploadForm() {
  const [file, setFile] = useState(null);
  const [score, setScore] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);
    const res = await axios.post("http://localhost:8000/upload/", formData);
    setScore(res.data.empathy_score);
  };

  return (
    <div>
      <input type="file" accept=".mp4" onChange={e => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
      {score && <p>Empathy Score: {score}</p>}
    </div>
  );
}

export default UploadForm;
