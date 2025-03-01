import styled from 'styled-components'

export const AppLayout = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`

export const EditorContainer = styled.div`
  border-right: 1px solid #e0e0e0;
  padding-right: 2rem;
`

export const StyledTextArea = styled.textarea`
  width: 100%;
  height: 80vh;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
  resize: none;

  &:focus {
    outline: 2px solid #646cff;
  }
`

export const PreviewContainer = styled.div`
  padding: 1rem;
  overflow-y: auto;
  max-height: 80vh;

  /* Basic markdown styling */
  h1 {
    font-size: 2rem;
  }
  code {
    background: #f0f0f0;
    padding: 0.2em 0.4em;
    border-radius: 3px;
  }
`
