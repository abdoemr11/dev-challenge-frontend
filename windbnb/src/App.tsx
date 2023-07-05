import Gallery from "./components/Gallery";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { getStays } from "./services/stays";
import { Helmet } from "react-helmet";
import SearchModal from "./components/SearchModal";
import useStayStore from "./services/store";
function App() {
    const setStays = useStayStore((state) => state.setStays);
    const filterdStays = useStayStore((state) => state.filteredStays);
    const setFilteredStays = useStayStore((state) => state.setFilterdStays);
    const [isModalVisible, setModalVisible] = useState<boolean>(false);
    useEffect(() => {
        setStays(getStays());
        setFilteredStays(getStays());
    }, []);
    return (
        <>
            <Helmet>
                <title>Windbnb</title>
                <link
                    rel="shortcut icon"
                    href="/public/triangleLogo.png"
                    type="image/x-icon"
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    rel="stylesheet"
                ></link>
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Mulish:wght@400;700;800&family=Poppins:wght@700&display=swap"
                    rel="stylesheet"
                ></link>
                <link
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    rel="stylesheet"
                ></link>
            </Helmet>
            <Header setModalVisible={setModalVisible} />
            <Gallery stays={filterdStays} />
            <SearchModal
                isModalVisible={isModalVisible}
                setModalVisible={setModalVisible}
            />
        </>
    );
}

export default App;
