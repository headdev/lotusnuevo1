import Preloader from "@/components/elements/Preloader";
import { useEffect, useState } from "react";
const Amplify = require('aws-amplify').Amplify;
const config = require('../src/configuracion');
Amplify.configure({ ...config, ssr: true });




import 'swiper/css'; 
import "swiper/css/navigation"; 
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "/public/app/dist/app.css";
import "/public/app/dist/font-awesome.css";
// import "/public/app/dist/owl.css"
import AddClassBody from "@/components/elements/AddClassBody";
import "/public/app/dist/responsive.css";

function MyApp({ Component, pageProps }) {

    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)

    }, [])
    return (<>
        {!loading ? (
            <>
                <AddClassBody />
                <Component {...pageProps} />
            </>
        ) : (
            <Preloader />
        )}
    </>)
} 

export default MyApp
