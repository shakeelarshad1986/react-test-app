import React, { useEffect } from 'react'
import Main from '../layouts/main'

const Page = ({children,title}) => {
    useEffect(()=>{
        document.title = title ?  `Dog ceo | ${title}` :"Bulldog";
    },[title])
  return (
    <Main>
        {children}
    </Main>
  )
}

export default Page