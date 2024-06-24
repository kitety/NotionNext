import { useMount, useRequest } from 'ahooks'
import * as jinrishici from 'jinrishici'
import { useState } from 'react';


const hiToKoToFetch = async () => {
  const res = await fetch('https://v1.hitokoto.cn/');
  const data = await res.json();
  console.log('data', data)
  return data;
}

const Poetry = () => {
  const [jinRiShiCiText, setJinRiShiCiText] = useState('')

  const { data: koto } = useRequest(hiToKoToFetch)
  console.log('koto', koto)
  const hiToKoToText = koto?.hitokoto
  useMount(() => {
    jinrishici.load(result => {
      const content = result.data.content;
      setJinRiShiCiText(content)
    }, errData => {
      console.log(err);
    });
  })

  return <>
    {jinRiShiCiText && <p>{jinRiShiCiText}</p>}
    {hiToKoToText && <p>{hiToKoToText}</p>}
  </>
}
export default Poetry
