import ReactMarkdown from 'react-markdown'
import { PreviewContainer } from '../styles'

const PreviewPanel = ({ content }) => {
  return (
    <PreviewContainer>
      <ReactMarkdown>{content || '*Your rendered content will appear here*'}</ReactMarkdown>
    </PreviewContainer>
  )
}

export default PreviewPanel
