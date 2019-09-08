import Link from 'next/link'
import { Button } from 'antd'
import { withRouter } from 'next/router'



export default withRouter((props) => <div>
  <Link href='/about'>
    <a>about</a>
  </Link>
  {console.log(props)}
  <h1>Welcome {props.router.query.name}</h1>
  <Button>hello</Button>
</div>)
