import dynamic from 'next/dynamic'
import { Button } from 'antd'
import Head from 'next/head'
import Router, { withRouter } from 'next/router'

import show from '../utils/tools'
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

const LazyComp = dynamic(import('../components/Lazy'))
const Index = (props) => <div>
  <Head>
    <title>Home Page</title>
  </Head>
  <LazyComp />
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
  <Button>hello</Button>
  Age: {props.age}
</div>

Index.getInitialProps = async () => {
  // const show = await import('../utils/tools')
  // show.default()
  console.log('-------------')
  show()
  return { age: 28 }
}

export default withRouter(Index)
