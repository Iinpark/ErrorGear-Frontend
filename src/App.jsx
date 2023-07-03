import { useState } from 'react';
import './App.css';
import FileInput from './components/FileInput';

function App() {
  const [parsedFile, setParsedFile] = useState('');
  return (
    <>
      <FileInput onFileUpload={setParsedFile} />
      <pre>{parsedFile}</pre>
    </>
  );
}

export default App;

