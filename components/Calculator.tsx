import React from 'react'
import ThemeSwitcher from './ThemeSwitcher'
import Screen from './Screen'
import Buttons from './Buttons'

type Props = {}

const Calculator = (props: Props) => {
  function scope(){
    var bitch = 'cunt'

    {
      let bitch2 = 'cunnnnt'
    }

    console.log(bitch2)
  }

  scope()
  
  
  return (
    <div className='flex flex-col gap-6 mx-6 min-w-[327px] max-w-[540px] w-full'>
      <div className='flex items-center justify-between'>
        <h1 className='text-[32px] text-white pl-2'>calc</h1>
        <ThemeSwitcher/>
      </div>
      <Screen/>
      <Buttons/>
    </div>
  )
}

export default Calculator