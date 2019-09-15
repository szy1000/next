import Link from 'next/link'
import Router from 'next/router'
import { Button } from 'antd'


import {connect} from 'react-redux'

class About extends React.Component{
  render() {
    const {person: {age}} = this.props
    return (
      <div>
        <Link href='/index?name=szy' as='/index/szy'>
          <a>index</a>
        </Link>
        <p>{age}</p>
        <Button onClick={() => { Router.push('/index') } }>hello</Button>
        <Button onClick={() => { Router.push({
          pathname: '/hoc',
          query: {
            id: 2
          }
        })} }>hoc</Button>
      </div>
    )
  }
}
export default connect(
  state => ({...state}),

)(About)
