import { Helmet } from "react-helmet";
import Content from "./components/Content";
function App() {
    return (
        <>
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                ></link>
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&family=Raleway:wght@700&display=swap"
                    rel="stylesheet"
                ></link>
            </Helmet>
            <h1 className="container py-8 text-center font-[Raleway] text-4xl font-bold tracking-[-0.10125rem] text-[#333]">
                #todo
            </h1>
            <Content />
        </>
    );
}

export default App;
