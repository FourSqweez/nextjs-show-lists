import Layout from '../comps/Layout'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <div className="page-container">
        <Component {...pageProps} />
      </div>
    </Layout>
  )
}

export default MyApp
