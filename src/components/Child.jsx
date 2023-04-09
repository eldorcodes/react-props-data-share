import React, { useRef, useState } from 'react'

function Child(props) {

    function shareData(e){
        props.onChangeData(e.target.value)
    }

  return (
    <div className='child'>
        <h1>Child</h1>
        <input onChange={(e) => shareData(e)} type="text" placeholder='Add item' />
        <div className='wrap'>
        {props.data?.map((item,index) => (
            <div key={index}>
                <h1>{item}</h1>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Child