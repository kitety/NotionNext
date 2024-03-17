import { useMount, useReactive, useRequest } from 'ahooks'
import axios from 'axios'
import * as jinrishici from 'jinrishici'

const hiToKoToFetch = () => axios.get('https://v1.hitokoto.cn')

const Poetry = () => {
  const state = useReactive({
    shici: ''
  })

  const { data: koto } = useRequest(hiToKoToFetch)
  const hiToKoToText = koto?.data?.hitokoto
  useMount(() => {
    jinrishici.load(
      result => {
        state.shici = result?.data?.content || ''
      },
      errData => {
        console.log(errData)
      }
    )
  })

  return (
    <>
      {state.shici && <p>{state.shici}</p>}
      {hiToKoToText && <p>{hiToKoToText}</p>}
    </>
  )
}
export default Poetry
