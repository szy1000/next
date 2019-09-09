import App, {Container} from 'next/app'
// import React from 'react'

import 'antd/dist/antd.css'

class MyApp extends App{
  static async getInitialProps({ Component, ctx }) {
    console.log('app init')
    let pageProps = {}
    if(Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return {
      pageProps
    }
  }

  render() {
    const {Component, pageProps} = this.props
    return <Container>
      <Component {...pageProps}/>
    </Container>
  }
}
export default MyApp
