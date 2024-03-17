import { useRequest } from 'ahooks'
import axios from 'axios'

const jinRiShiCiFetch = () =>
  axios.get(
    'https://v2.jinrishici.com/one.json?client=browser-sdk/1.2&X-User-Token=ztizwYq6nONeaj2JDYBlz%2B5SLbb3Jlcq'
  )
const hiToKoToFetch = () => axios.get('https://v1.hitokoto.cn')

const Poetry = () => {
  const { data } = useRequest(jinRiShiCiFetch)
  const jinRiShiCiText = data?.data?.data?.content

  const { data: koto } = useRequest(hiToKoToFetch)
  const hiToKoToText = koto?.data?.hitokoto

  return <>
    {jinRiShiCiText && <p>{jinRiShiCiText}</p>}
    {hiToKoToText && <p>{hiToKoToText}</p>}
  </>
}
export default Poetry
