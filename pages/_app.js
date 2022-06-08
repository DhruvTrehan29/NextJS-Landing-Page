import '../styles/globals.css'
import NavBar from '../Components/NavBar'
function MyApp({ Component, pageProps }) {
  return <>
  <NavBar/>
 <Component {...pageProps}/>
 </>
}

export default MyApp
