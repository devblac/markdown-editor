// import logo from './logo.svg';
// import './App.css'
import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import { sanitizeMarkdown } from './utils'

const EditorLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg); // Custom CSS variable
  padding: 2rem; // Using rem units intentionally
  max-width: 1200px;
  margin: 0 auto;
`;

const EditorPanel = styled.div`
  flex: 1;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 90%;
  padding: 10px;
  font-family: monospace;
`;

const PreviewPanel = styled.div`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  overflow-y: auto;
`;

const Button = styled.button`
  margin: 10px 0;
  padding: 8px 16px;
`;


const MarkdownEditor = () => {
  const [rawMarkdown, setRawMarkdown] = useState('')
  const [renderedContent, setRenderedContent] = useState('')

  const FEATURE_FLAGS = {
    LIVE_PREVIEW: true,
    LOCAL_STORAGE: true
  };



  useEffect(() => {
      if (FEATURE_FLAGS.LIVE_PREVIEW) {
        setRenderedContent(rawMarkdown);
      }
    }, [rawMarkdown]);

  useEffect(() => {    
    const savedContent = localStorage.getItem('markdownContent');
    if (savedContent) {
      setRawMarkdown(savedContent);
    }
  }, [rawMarkdown]);

  const handleRender = () => {
    setRenderedContent(sanitizeMarkdown(rawMarkdown));
  };
  return (
    <div className="App">
      <EditorLayout>
        <EditorPanel>
          <StyledTextArea
            value={rawMarkdown}
            onChange={(e) => setRawMarkdown(e.target.value)}
            placeholder="Enter markdown here..."
          />
          <Button onClick={handleRender} >
            Render
          </Button>
        </EditorPanel>
        <PreviewPanel>
          <ReactMarkdown>
            {renderedContent}
          </ReactMarkdown>
        </PreviewPanel>
      </EditorLayout>
    </div>
  );
}

export default MarkdownEditor;
