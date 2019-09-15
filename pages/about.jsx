import Link from 'next/link'
import {connect} from 'react-redux'
import Router from 'next/router'
import { Button } from 'antd'



class About extends React.Component{
  render() {
    const {person: {age}, dispatch} = this.props
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
        <Button onClick={() => dispatch({
          type: 'update',
          data: {
            age: 33
          }
        })}>dispatch</Button>
      </div>
    )
  }
}
export default connect(
  state => ({...state}),
)(About)
