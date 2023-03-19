import {Route, Routes} from "react-router-dom";
import {HomeScreen} from "./components/HomeScreen";

function App() {
    return (<>
        <Routes>
            <Route path={"/"} element={<HomeScreen/>}/>
        </Routes>
    </>);
}

export default App;
