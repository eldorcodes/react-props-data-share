import React from 'react'

export default function SIbling(props) {

    const shareData = (i) => {
        props.onChangeData(i)
    }
  return (
    <div className='sibling'>
        <h1>Sibling</h1>
        <input onChange={(e) => shareData(e.target.value)} type="text" placeholder='Add item' />
       <div className="wrap">
       {
            props.data?.map((item,index) => (
                <div key={index}>
                    <h1>{item}</h1>
                </div>
            ))
        }
       </div>
    </div>
  )
}
