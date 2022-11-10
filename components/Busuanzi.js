import busuanzi from '@/lib/busuanzi'
import { useRouter } from 'next/router'
// import { useRouter } from 'next/router'
import React from 'react'

export default function Busuanzi() {
  const router = useRouter()

  // 切换文章时更新
  React.useEffect(() => {
    const busuanziRouteChange = url => {
      busuanzi.fetch()
    }
    router.events.on('routeChangeComplete', busuanziRouteChange)
    return () => {
      router.events.off('routeChangeComplete', busuanziRouteChange)
    }
  }, [router.events])

  return null
}
