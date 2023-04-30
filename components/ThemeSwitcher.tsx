import React from 'react'

type Props = {}

const ThemeSwitcher = (props: Props) => {
  return (
    <div className='flex'>
        <p>Theme</p>
        <div className='flex flex-wrap'>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <div>
                <div></div>
            </div>
        </div>
    </div>
  )
}

export default ThemeSwitcher