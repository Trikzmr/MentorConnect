import React from 'react'

const Selector = () => {
    function handlechange(p){
        console.log(p.target.value);
    }
  return (
    <>
        <select onChange={handlechange}>
            <option value="test">Test</option>
            <option value="try">Try</option>
        </select>
    </>
  )
}

export default Selector
