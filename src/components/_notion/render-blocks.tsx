import React, { Fragment } from 'react'
import AnchorLink from 'src/components/_notion/anchor-link'
import CodeBlock from 'src/components/_notion/code-block'
import Callout from 'src/components/_notion/callout-content'
import YoutubeEmbed from 'src/components/_notion/youtube-embed'
import Text from 'src/components/_notion/text-generic'
import { sourceSans } from 'pages/_app'
import Image from 'next/image'

export function RenderBlocks(block) {
  const { type, id } = block
  const value = block[type]

  switch (type) {
    case 'paragraph':
      return (
        <p
          className={[
            sourceSans.className,
            'pt-1 leading-[34px] text-zinc-500 text-xl tracking-wide',
          ].join(' ')}
        >
          <Text text={value.text} />
        </p>
      )
    case 'heading_1':
      return (
        <div className={[
          sourceSans.className,
          'pt-8 text-4xl text-zinc-700 font-semibold',
        ].join(' ')}>
          <AnchorLink text={value.text[0].text.content}>
            <Text text={value.text} />
          </AnchorLink>
        </div>
      )
    case 'heading_2':
      return (
        <div
          className={[
            sourceSans.className,
            'pt-8 text-3xl text-zinc-700 font-semibold',
          ].join(' ')}
        >
          <AnchorLink text={value.text[0].text.content}>
            <Text text={value.text} />
          </AnchorLink>
        </div>
      )
    case 'heading_3':
      return (
        <div
          className={[
            sourceSans.className,
            'pt-6 text-2xl text-zinc-700 font-semibold',
          ].join(' ')}
        >
          <AnchorLink text={value.text[0].text.content}>
            <Text text={value.text} />
          </AnchorLink>
        </div>
      )
    case 'bulleted_list_item':
    case 'numbered_list_item':
      return (
        <li className={[
          sourceSans.className,
          'pt-1 leading-[34px] text-zinc-500 text-lg tracking-wide',
        ].join(' ')}>
          <Text text={value.text} />
        </li>
      )
    case 'to_do':
      return (
        <div className="text-lg">
          <label htmlFor={id} className={[
          sourceSans.className,
          'pt-1 leading-[34px] text-zinc-500 text-lg tracking-wide flex items-center justify-start space-x-3',
        ].join(' ')} >
            <input
              id={id}
              aria-describedby={value.text}
              name={id}
              type="checkbox"
              checked={value?.checked}
              readOnly
              className="w-4 h-4 text-teal-500 border-zinc-300 rounded focus:ring-teal-500"
            />
            <Text text={value.text} />
          </label>
        </div>
      )
    case 'toggle':
      return (
        <details>
          <summary className={[
          sourceSans.className,
          'pt-1 leading-[34px] text-zinc-500 text-lg tracking-wide flex items-center justify-start space-x-3',
        ].join(' ')}>
            <Text text={value.text} />
          </summary>
          {value.children?.map(block => (
            <Fragment key={block.id}>{RenderBlocks(block)}</Fragment>
          ))}
        </details>
      )
    case 'child_page':
      return <p >{value.title}</p>
    case 'image':
      const src = value.type === 'external' ? value.external.url : value.file.url
      const caption = value.caption.length >= 1 ? value.caption[0].plain_text : ''
      return (
        <figure className="mt-0">
          <Image
            width={1000}
            height={600}
            className="rounded-lg w-full"
            src={src}
            alt={caption ? caption : 'A visual depiction of what is being written about'}
          />
          {caption && <figcaption className="text-center">{caption}</figcaption>}
        </figure>
      )
    case 'code':
      return (
        <CodeBlock
          language={value.language}
          caption={value.caption.length >= 1 && value.caption[0].plain_text}
          code={value.text[0].text.content}
        />
      )
    case 'callout':
      return (
        <Callout>
          {value.icon && <span className="text-2xl">{value.icon.emoji}</span>}
          <div className={[
            sourceSans.className,
            'pt-1 leading-[28px] text-base text-zinc-500 tracking-wide',
          ].join(' ')}>
            <Text text={value.text}/>
          </div>
        </Callout>
      )
    case 'table_of_contents':
      return <div>TOC</div>
    case 'video':
      return <YoutubeEmbed url={value?.external?.url || ''} />
    case 'quote':
      return (
        <blockquote className={[
          sourceSans.className,
          'p-4 rounded-r-lg bg-zinc-50 leading-[28px] text-base text-zinc-500 tracking-wide',
        ].join(' ')}>
          <Text text={value.text} />
        </blockquote>
      )
    case 'divider':
      return (
        <hr className="my-16 w-full border-none text-center h-10 before:content-['∿∿∿'] before:text-[#D1D5DB] before:text-2xl"></hr>
      )
    default:
      return `❌ Unsupported block (${
        type === 'unsupported' ? 'unsupported by Notion API' : type
      })`
  }
}
