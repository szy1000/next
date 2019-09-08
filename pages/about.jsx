import Link from 'next/link'
import Router from 'next/router'
import { Button } from 'antd'


export default () => (<div>
  <Link href='/index?name=szy' as='/index/szy'>
    <a>index</a>
  </Link>
  <Button onClick={() => { Router.push('/index') } }>hello</Button>
  <Button onClick={() => { Router.push({
    pathname: '/hoc',
    query: {
      id: 2
    }
  })} }>hoc</Button>
</div>)
