import React from 'react'
import Card from './Card'
import { TbRuler } from 'react-icons/tb'
import './cards.css'

function Cards() {
  return (
    <div className='w-full'>
        <div  className='w-[75vw] mx-auto py-14 flex gap-2'>
        <Card cName='fcard' heading='BLOG' text='News & Insights' width={"basis-1/3"} start={false} para={TbRuler}/>
        <Card cName='scard'   heading='GET IN TOUCH' text={<div>
          <h1>Lets get to it.</h1>
          <h1>together.</h1>
        </div>} width={"basis-2/3"} start={true} para={false}/>
        </div>
    </div>
  )
}

export default Cards