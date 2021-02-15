import '../styles/globals.css';
import SimpleReactLightbox from 'simple-react-lightbox';
import { AppWrapper } from '../context/state';

function MyApp({ Component, pageProps }) {
  return (
    <SimpleReactLightbox>
        <AppWrapper>
          <Component {...pageProps} />
        </AppWrapper>
    </SimpleReactLightbox>
  )
}

export default MyApp
