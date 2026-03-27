type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type RichTextNode = { type: 'paragraph'; text: string } | { type: HeadingTag; text: string }

const makeTextChild = (text: string) => ({
  type: 'text',
  text,
  mode: 'normal',
  style: '',
  detail: 0,
  format: 0,
  version: 1,
})

const makeParagraph = (text: string) => ({
  type: 'paragraph',
  format: '',
  indent: 0,
  version: 1,
  direction: null,
  textStyle: '',
  textFormat: 0,
  children: [makeTextChild(text)],
})

const makeHeading = (tag: HeadingTag, text: string) => ({
  type: 'heading',
  tag,
  format: '',
  indent: 0,
  version: 1,
  direction: null,
  children: [makeTextChild(text)],
})

export const toRichText = (...nodes: RichTextNode[]) => ({
  root: {
    type: 'root',
    format: '',
    indent: 0,
    version: 1,
    direction: null,
    children: nodes.map((node) => (node.type === 'paragraph' ? makeParagraph(node.text) : makeHeading(node.type, node.text))),
  },
})
