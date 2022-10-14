import React, {useEffect, useState} from 'react';
import './App.css';


function App() {
  const [status, setStatus] = useState<String>("unknown");

  useEffect(() => {
    fetch("http://localhost:8080/status", { method: 'GET' })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        return Promise.reject(new Error("Error"));
      })
      .then((response) => setStatus(response.status));
  }, [])

  return (
    <div>
      <p>Status: {status}</p>
    </div>
  );
}

export default App;
