
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";
import Container from "./pages/container/Container";


function App() {
 
  return (
    <>
    <Container>
        <Navbar />
        <Outlet />
    </Container> 
    </>
  );
}

export default App;


