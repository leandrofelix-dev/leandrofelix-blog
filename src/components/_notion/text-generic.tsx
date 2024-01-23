import { sourceSans, firaCode } from 'pages/_app'

export default function Text({ text }) {
  if (!text) return null

  return text.map((value, index) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value
    return (
      <span
        key={index}
        className={[
          sourceSans.className,
          bold ? 'font-bold' : null,
          italic ? 'italic' : null,
          code
            ? 'bg-zinc-200 font-semibold text-sm px-2 rounded mx-1 inline-block align-middle tracking-tight'
            : null,
          strikethrough ? 'line-through' : null,
          underline ? 'underline' : null,
        ].join(' ')}
        style={color !== 'default' ? { color } : {}}
      >
        {text.link ? (
          <a target='_blank' className="text-zinc-700 underline" href={text.link.url} rel="noreferrer">
            {text.content}
          </a>
        ) : (
          text.content
        )}
      </span>
    )
  })
}
