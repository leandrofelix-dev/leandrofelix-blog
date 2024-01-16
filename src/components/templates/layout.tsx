import Navbar from 'src/components/organisms/navbar'
import Footer from 'src/components/organisms/footer'
import { MetaHead } from 'src/components/organisms/meta-head'

export function Layout(props) {
  const { children, date, imageUrl, title, description, ogUrl } = props

  const metaHeadProps = {
    date,
    imageUrl,
    description,
    ogUrl,
    title,
  }

  return (
    <>
      <MetaHead {...metaHeadProps} />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
