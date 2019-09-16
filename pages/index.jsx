import dynamic from 'next/dynamic'
import { Button } from 'antd'
import Head from 'next/head'
// import store from  '../store/store'
import Router, { withRouter } from 'next/router'
//2种引入方式
// import show from '../utils/tools'
// show()

//异步引入



const events = [
  'routerChangeStart',
  'routerChangeComplete',
  'routerChangeError',
  'beforeHistoryChange',
  'hashChangeStart',
  'hashChangeComplete'
]

const makeEvent = (type) => (...args) => console.log(type, ...args)

events.forEach(event => {
  Router.events.on(event, makeEvent(event))
})

// store.subscribe(() => {
//   console.log('change:', store.getState())
// })


// const LazyComp = dynamic(import('../components/Lazy'))
// import LazyComp from '../components/Lazy'
const Index = (props) => <div>
  <Head>
    <title>Home Page</title>
  </Head>
  {/*<LazyComp />*/}
  <style jsx>
  {`
    h1 {
      color: red
    }
  `}
  </style>

  <style jsx global>
    {`
    body {
      background: #f5f5f5
    }
  `}
  </style>
  <h1 className='hello'>Welcome {props.router.query.name}</h1>
  <Button onClick={ async () => {
    const mom = await import('moment')
    console.log(typeof mom)
    console.log(mom.default(1568613206000).format('YYYY'))
    const show = await import('../utils/tools')
    console.log(typeof show)

    // show.default()
  }
  }>hello</Button>
  Age: {props.age}
</div>

Index.getInitialProps = async () => {
  return { age: 28, }
}

export default withRouter(Index)
