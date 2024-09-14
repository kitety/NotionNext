import Script from 'next/script'
import { useEffect } from 'react'

export default function GoogleTranslate() {
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      const google = window.google
      const translateElement = new google.translate.TranslateElement(
        {
          autoDisplay: true
        },
        'google_translate_element'
      )
      console.log('translateElement', translateElement)
    }
  })

  return (
    <div className=' rounded-sm h-full cursor-pointer flex items-center justify-center '>
      <div className='site-nav ' id='google_translate_element'></div>
      <Script
        src='//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
        strategy='afterInteractive'
      />
      <style>
        {`
        #google_translate_element {
          float: right;
          height: 100%;
          padding: 0 0.5rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          img {
            display: inline;
            margin: auto;
            max-width: 100%;
            height: auto;
          }
        }
        .skiptranslate {
          iframe {
            display: none !important;
          }
        }
        #goog-gt-tt {
          display: none !important;
        }
        // https://stackoverflow.com/a/8531408
        .goog-tooltip {
          display: none !important;
        }
        .goog-tooltip:hover {
          display: none !important;
        }
        .goog-text-highlight {
          background-color: transparent !important;
          border: none !important;
          box-shadow: none !important;
        }
          .goog-te-combo{
            border: 1px solid #ccc !important;
          }
        `}
      </style>
    </div>
  )
}
