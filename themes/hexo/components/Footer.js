import { BeiAnGongAn } from '@/components/BeiAnGongAn'
import BeiAnSite from '@/components/BeiAnSite'
import PoweredBy from '@/components/PoweredBy'
import { siteConfig } from '@/lib/config'
import Poetry from './Poetry'

const links = [
  { name: 'Brainrot AI', link: 'https://brainrotai.net/' },
  { name: 'Ghibli Image Generator', link: 'https://ghibliimagegenerator.com/' },
  { name: 'Kolors Virtual Try On', link: 'https://kolors-virtual-try-on.com/' }
]
const Footer = ({ title }) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate =
    parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

  return (
    <footer className='relative z-10 dark:bg-black flex-shrink-0 bg-hexo-light-gray justify-center text-center m-auto w-full leading-6  text-gray-600 dark:text-gray-100 text-sm p-6'>
      {/* <DarkModeButton/> */}
      <i className='fas fa-copyright' /> {`${copyrightDate}`}
      <span>
        <i className='mx-1 animate-pulse fas fa-heart' />
        <a
          href={siteConfig('LINK')}
          className='underline font-bold  dark:text-gray-300 '>
          {siteConfig('AUTHOR')}
        </a>
        <Poetry />
        .<br />
        <BeiAnSite />
        <BeiAnGongAn />
        <span className='hidden busuanzi_container_site_pv'>
          <i className='fas fa-eye' />
          <span className='px-1 busuanzi_value_site_pv'> </span>
        </span>
        <span className='pl-2 hidden busuanzi_container_site_uv'>
          <i className='fas fa-users' />
          <span className='px-1 busuanzi_value_site_uv'> </span>
        </span>
        <h1 className='text-xs pt-4 text-light-400 dark:text-gray-400'>
          {title} {siteConfig('BIO') && <>|</>} {siteConfig('BIO')}
        </h1>
        <div className='mx-auto flex justify-center'>
          <PoweredBy />
        </div>
        <div className='text-xl flex justify-center items-center gap-2 mt-2'>
          Supported by
        </div>
        <div className='flex justify-center items-center gap-2'>
          {links.map(link => (
            <a
              target='_blank'
              rel='nofollow noopener noreferrer'
              href={link.link}
              className='underline font-bold  dark:text-gray-300 '>
              {link.name}
            </a>
          ))}
        </div>
      </span>
      <br />
    </footer>
  )
}

export default Footer
