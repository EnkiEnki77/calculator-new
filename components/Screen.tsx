import React from 'react'

type Props = {}

const Screen = (props: Props) => {
  return (
    <div className='h-20 md:h-[128px] px-6 items-center rounded-[10px] bg-[#181F33] flex flex-row-reverse'>
        <h2 className='text-[40px] text-white'>300,000</h2>
    </div>
  )
}

export default Screen