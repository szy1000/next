import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import moment from 'moment'
function Example() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);

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

  const dynamicFun = () => {
    import('moment').then(moment => setTime(moment.default(1568613206000).format('YYYY')))
  }
  return (
    <div>
      <p>You cliked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>{time}</p>
      {/*验证moment动态导入*/}
      {/*<p>{dynamicFun()}</p>*/}
      <button onClick={async () => {
        // dynamicFun()
        const mom = await import('moment')
        setTime(mom.default(1568613206000).format('YYYY'))
      }}>click</button>
    </div>
  )
}

export default Example
