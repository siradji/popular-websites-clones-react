
import type { AppProps /*, AppContext */ } from 'next/app';

import 'tailwindcss/tailwind.css';
import '../styles/global.css';


 function TransferWise({ Component, pageProps }: AppProps) {
   return <Component {...pageProps} />
 }

 export default TransferWise