/* eslint-disable @next/next/no-img-element */
import { useMount } from 'ahooks'
import { useState } from 'react'

/**
 * 赞赏按钮
 * @returns {JSX.Element}
 * @constructor
 */
const RewardButton = () => {
  const [mount, setMount] = useState(false)
  const [show, setShow] = useState(false)
  useMount(() => setMount(true))
  if (!mount) {
    return null
  }

  return (
    <div className='justify-center mt-6'>
      <div onClick={() => { setShow(value => !value) }}
        className='bg-[#24a8f0] py-2 w-24 text-center mx-auto animate__jello text-white hover:bg-blue-400 duration-200 transform hover:scale-110 px-3 rounded cursor-pointer'>
        <i className='mr-2 fas fa-qrcode' />
        <span>打赏</span>
      </div>

      <div id='reward-qrcode' className={`flex space-x-10 my-5 px-5 mx-auto py-6 justify-center bg-white dark:bg-black dark:text-gray-200 ${show ? '' : 'hidden'}`}>
        <div ><img width='150' height='150' src='https://pomf2.lain.la/f/u8ujbnq.png' /></div>
        <div ><img width='150' height='150' src='https://pomf2.lain.la/f/8d1edv4o.png' /></div>
      </div>
    </div>
  )
}
export default RewardButton
