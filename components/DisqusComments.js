import { DiscussionEmbed } from 'disqus-react'
import { useRouter } from 'next/router'
import BLOG from '@/blog.config'

const DisqusComments = ({ frontMatter }) => {
  const router = useRouter()
  const shareUrl = BLOG.LINK + router.asPath
  const disqusConfig = {
    url: shareUrl,
    identifier: frontMatter.id, // Single post id
    title: frontMatter.title // Single post title
  }
  return (
    <div>
      <DiscussionEmbed
        shortname={BLOG.COMMENT_DISQUS_ID}
        config={disqusConfig}
      />
    </div>
  )
}
export default DisqusComments
