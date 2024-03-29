import { firaCode } from 'pages/_app'

export default function Category({ setSelectedTag, tag, selectedTag }) {
  const handleTagClick = (tag: string) => {
    if (selectedTag === tag) {
      return setSelectedTag(null)
    }
    return setSelectedTag(tag)
  }

  return (
    <div
      key={tag}
      onClick={() => handleTagClick(tag)}
      className={`${
        selectedTag === tag && 'border bg-red-900 text-white bg-zinc-50/50'
      } border border-zinc-200 inline-flex items-center px-3.5 py-1.5 uppercase bg-zinc-100 rounded-xl cursor-pointer hover:bg-zinc-50/50 hover:shadow-sm`}
    >
      <span className={[firaCode.className, 'text-sm font-semibold uppercase'].join(' ')}>
        {tag || 'All'}
      </span>
    </div>
  )
}
