import React, { useState } from 'react';
import './App.css';
import FileInput from './components/FileInput';
import { Layout, Col, Row } from 'antd';

function App() {
  const [parsedFile, setParsedFile] = useState('');
  const span = 12;
  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <Layout.Content style={{ paddingTop: '8px' }}>
          <Row>
            <Col span={span} offset={span / 2}>
              <FileInput onFileUpload={setParsedFile} />
              <pre>{parsedFile}</pre>
            </Col>
          </Row>
        </Layout.Content>

        <Layout.Footer style={{ textAlign: 'center' }}>
          Made on Earth by Humans
        </Layout.Footer>
      </Layout>
    </>
  );
}

export default App;
