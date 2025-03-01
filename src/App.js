import React, { useState, useEffect } from 'react'
import { sanitizeMarkdown } from './utils/sanitizeMarkdown'
import EditorPanel from './components/EditorPanel'
import PreviewPanel from './components/PreviewPanel'
import { AppLayout } from './styles'

const FEATURE_FLAGS = {
  LIVE_PREVIEW: true,
  PERSISTENCE: true
}

const MarkdownEditor = () => {
  const [rawContent, setRawContent] = useState('')
  const [renderedHTML, setRenderedHTML] = useState('')

  useEffect(() => {
    if (FEATURE_FLAGS.PERSISTENCE) {
      const savedContent = localStorage.getItem('mdEditorContent')
      if (savedContent) setRawContent(savedContent)
    }
  }, [])

  useEffect(() => {
    if (FEATURE_FLAGS.LIVE_PREVIEW) {
      setRenderedHTML(sanitizeMarkdown(rawContent))
    }

    if (FEATURE_FLAGS.PERSISTENCE) {
      localStorage.setItem('mdEditorContent', rawContent)
    }
  }, [rawContent])

  return (
    <AppLayout>
      <EditorPanel content={rawContent} onContentChange={setRawContent} />
      <PreviewPanel content={renderedHTML} />
    </AppLayout>
  )
}

export default MarkdownEditor
