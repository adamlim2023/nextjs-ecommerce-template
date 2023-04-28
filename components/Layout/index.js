import Header from './Header';

const Layout = ({children}) => {
  return <div>
    <Header />
    <div>{children}</div>
  </div>
}

export default Layout;