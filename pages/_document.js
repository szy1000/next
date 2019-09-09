import Document, { Head, Main, NextScript } from 'next/document'

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
          <Main />
          <div>a</div>
          <div>b</div>
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument
