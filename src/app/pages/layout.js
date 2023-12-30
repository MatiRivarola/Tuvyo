import HeadPage from '@components/Head'
import FooterPage from '@components/footer'

export default function HomeLayout({ children }) {
    return (
    <>
    <HeadPage/>
    {children}
    <FooterPage/>
    </>
    )
  }
  