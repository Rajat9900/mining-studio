import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { set, PatchEvent } from 'sanity'
import { StringInputProps } from 'sanity'

const TinyMCEEditor = ({ value, onChange }: StringInputProps) => {
  const handleEditorChange = (content: string) => {
    onChange(PatchEvent.from(set(content)))
  }

  return (
    <Editor
      apiKey="mhm0xe3kl221293avd3fupai35euizaj23whh7036jv9r415" // Optional, you can leave blank for localhost/dev
      value={typeof value === 'string' ? value : ''}
      init={{
        height: 400,
        menubar: true,
        branding: false,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount'
        ],
        toolbar:
          'undo redo | formatselect | bold italic backcolor | \
          alignleft aligncenter alignright alignjustify | \
          bullist numlist outdent indent | removeformat | help | table'
      }}
      onEditorChange={handleEditorChange}
    />
  )
}

export default TinyMCEEditor
