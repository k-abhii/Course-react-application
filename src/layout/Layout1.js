import React  from "react";
import Header from '../components/Navbar';
import Container from 'react-bootstrap/Container';
function Layout1(props){

    return(
        <div>
            <header>
            <Header />
                </header>
            <Container>{props.children}</Container>
            <Container><footer>React Route Handling </footer> </Container>
        </div>
    )
}

export default Layout1;