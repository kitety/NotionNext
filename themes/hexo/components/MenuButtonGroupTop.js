import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useGlobal } from '@/lib/global'
import CONFIG_HEXO from '../config_hexo'
import { useExternal } from 'ahooks'

const urlPath =
  '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'

const MenuButtonGroupTop = props => {
  const { customNav } = props
  const { locale } = useGlobal()
  const [path, setPath] = useState('')
  useExternal(path, {
    type: 'js',
    js: {
      async: true
    }
  })

  useEffect(() => {
    window.googleTranslateElementInit = function googleTranslateElementInit() {
      document.getElementById('google_translate_element').innerHTML = ''
      setTimeout(() => {
        window.t = new window.google.translate.TranslateElement(
          {
            pageLanguage: 'auto',
            layout:
              window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false
          },
          'google_translate_element'
        )
      })
    }
  }, [])
  const getTranslate = () => {
    setPath(urlPath + `&t=${Math.random()}`)
  }

  let links = [
    {
      icon: 'fas fa-search',
      name: locale.NAV.SEARCH,
      to: '/search',
      show: CONFIG_HEXO.MENU_SEARCH
    },
    {
      icon: 'fas fa-archive',
      name: locale.NAV.ARCHIVE,
      to: '/archive',
      show: CONFIG_HEXO.MENU_ARCHIVE
    }
    // { icon: 'fas fa-folder', name: locale.COMMON.CATEGORY, to: '/category', show: CONFIG_HEXO.MENU_CATEGORY },
    // { icon: 'fas fa-tag', name: locale.COMMON.TAGS, to: '/tag', show: CONFIG_HEXO.MENU_TAG }
  ]

  if (customNav) {
    links = links.concat(customNav)
  }

  return (
    <nav id="nav" className="leading-8 flex justify-center  font-light w-full">
      <div id="google_translate_element"></div>
      {!path && (
        <a
          className={
            'py-1.5 my-1 px-3  text-base justify-center items-center cursor-pointer'
          }
        >
          <div
            onClick={getTranslate}
            id="transEle"
            className="w-full flex text-sm items-center justify-center hover:scale-125 duration-200 transform"
          >
            <i className="fas fa-language mr-1"></i>翻译
          </div>
        </a>
      )}
      {links.map(link => {
        if (link.show) {
          return (
            <Link key={`${link.to}`} title={link.to} href={link.to}>
              <a
                target={link.to.indexOf('http') === 0 ? '_blank' : '_self'}
                className={
                  'py-1.5 my-1 px-3  text-base justify-center items-center cursor-pointer'
                }
              >
                <div className="w-full flex text-sm items-center justify-center hover:scale-125 duration-200 transform">
                  <i className={`${link.icon} mr-1`} />
                  <div className="text-center">{link.name}</div>
                </div>
              </a>
            </Link>
          )
        } else {
          return null
        }
      })}
    </nav>
  )
}
export default MenuButtonGroupTop
