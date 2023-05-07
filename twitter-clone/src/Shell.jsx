import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import SingleTweet from "./pages/SingleTweet.jsx"
import {Route,BrowserRouter,Routes} from"react-router-dom";

const Shell = () => {
    return(
        <>
        
        <Navbar />
        <BrowserRouter>
            <Routes>
                <Route index element= {<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/tweet/:id" element={<SingleTweet />} />

            </Routes>
            </BrowserRouter>
        
        </>

    );
};
export default Shell;