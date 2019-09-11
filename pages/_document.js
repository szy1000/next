import Document, { Head, Main, NextScript } from 'next/document'
import Link from 'next/link'

class MyDocument extends Document{

  static async getInitialProps(ctx) {
    // ctx.renderPage = () => {}
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
        </Head>
        <body>
          <ul>
            <li><Link href='/index' as='/index'><a>Index</a></Link></li>
            <li><Link href='/about' as='/about'><a>About</a></Link></li>
            <li><Link href='/hooks' as='/hooks'><a>hooks</a></Link></li>
          </ul>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument
