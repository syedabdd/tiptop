import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Mark } from '@tiptap/core';

// highlight
const Highlight = Mark.create({
  name: 'highlight',
  addOptions: () => ({ color: '#FFFF00' }),
  addAttributes: () => ({
    color: { default: null },
  }),
  parseHTML: () => [{ tag: 'span[style]', getAttrs: node => ({ color: node.style.backgroundColor }) }],
  renderHTML: ({ HTMLAttributes }) => ['span', { style: `background-color: ${HTMLAttributes.color}` }, 0],
  addCommands: () => ({
    setHighlight: color => ({ commands }) => commands.setMark('highlight', { color }),
    unsetHighlight: () => ({ commands }) => commands.unsetMark('highlight'),
  }),
});

const TiptapEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit, Highlight],
    content: '<p>Type Something</p>',
  });

  if (!editor) return null;

  const applyHighlight = () => editor.chain().focus().setHighlight('#FFFF00').run();
  const removeHighlight = () => editor.chain().focus().unsetHighlight().run();

  return (
    <div>
      <div className='mb-5'>
        <button onClick={applyHighlight} className='border-[3px] hover:bg-red-500 mr-5 p-2 ' >Highlight</button>
        <button onClick={removeHighlight} className='border-[3px] hover:bg-red-500 mr-5 p-2'>Remove highlight</button>
      </div>
      <EditorContent editor={editor} />
    </div>
  );
};

export default TiptapEditor;
