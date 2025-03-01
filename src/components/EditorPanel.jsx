import { EditorContainer, StyledTextArea } from '../styles'

const EditorPanel = ({ content, onContentChange }) => {
  return (
    <EditorContainer>
      <StyledTextArea
        value={content}
        onChange={e => onContentChange(e.target.value)}
        placeholder='Start typing your markdown here...'
        aria-label='Markdown editor'
      />
    </EditorContainer>
  )
}

export default EditorPanel
