import Card from './Card'
import CategoryGroup from './CategoryGroup'
import LatestPostsGroup from './LatestPostsGroup'
import TagGroups from './TagGroups'
import Catalog from './Catalog'
import { InfoCard } from './InfoCard'
import { AnalyticsCard } from './AnalyticsCard'
import CONFIG_HEXO from '../config_hexo'
import HexoRecentComments from './HexoRecentComments'
import BLOG from '@/blog.config'
import { useState } from 'react'
import { useExternal } from 'ahooks'
import Card2 from '@/themes/hexo/components/Card'

/**
 * Hexo主题右侧栏
 * @param {*} props
 * @returns
 */
export default function SideRight(props) {
  const [path, setPath] = useState('')
  useExternal(path)
  const loadMusic = () => {
    const p = 'https://cdn.jsdelivr.net/npm/meting@2/dist/Meting.min.js'
    setPath(p)
  }
  const {
    post,
    currentCategory,
    categories,
    latestPosts,
    tags,
    currentTag,
    showCategory,
    showTag,
    slot
  } = props

  return (
    <div className={'space-y-4 lg:w-80 lg:pt-0 px-2 pt-4'}>
      <InfoCard {...props} />
      {CONFIG_HEXO.WIDGET_ANALYTICS && <AnalyticsCard {...props} />}

      {showCategory && (
        <Card>
          <div className='ml-2 mb-1 '>
            <i className='fas fa-th' /> 分类
          </div>
          <CategoryGroup
            currentCategory={currentCategory}
            categories={categories}
          />
        </Card>
      )}
      {showTag && (
        <Card>
          <TagGroups tags={tags} currentTag={currentTag} />
        </Card>
      )}
      {CONFIG_HEXO.WIDGET_LATEST_POSTS && latestPosts && latestPosts.length > 0 && <Card>
        <LatestPostsGroup {...props} />
      </Card>}

      {BLOG.COMMENT_WALINE_SERVER_URL && BLOG.COMMENT_WALINE_RECENT && (
        <HexoRecentComments />
      )}
      {!path && <Card2 onClick={loadMusic}>
        <div className='cursor-pointer'>
          <i className="fas fa-music mr-2 cu"></i><span>加载音乐</span>   </div>
      </Card2>}
      <meting-js server="netease" type="playlist" id="3778678"> </meting-js>

      <div className='sticky top-20'>
        {post && post.toc && post.toc.length > 1 && <Card>
          <Catalog toc={post.toc} />
        </Card>}
        {slot}
      </div>

    </div>
  )
}
