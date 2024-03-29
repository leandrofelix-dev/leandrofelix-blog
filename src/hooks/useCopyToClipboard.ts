import { useCallback, useEffect, useState } from 'react'

import copy from 'copy-to-clipboard'

export function useCopyToClipboard(resetInterval = 3000, text = null) {
  const [isCopied, setCopied] = useState(false)

  const handleCopy = useCallback(() => {
    if (window !== undefined) {
      copy(text ?? window.location.href)
      setCopied(true)
    }
  }, [])

  useEffect(() => {
    let timeout
    if (isCopied && resetInterval) {
      timeout = setTimeout(() => setCopied(false), resetInterval)
    }
    return () => {
      clearTimeout(timeout)
    }
  }, [isCopied, resetInterval])

  return [isCopied, handleCopy] as const
}
