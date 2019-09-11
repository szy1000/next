import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.post('http://10.45.29.90/api/v1/consulation/homePage/newsList')
      .then((res) => {
        console.log(res)
      })
    document.title = `${count}`
    return function cleanup() {
      console.log(document.title)
      document.title = 'app';
    }
  }, [count])

  return (
    <div>
      <p>You cliked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

export default Example
