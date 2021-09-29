import logo from './logo.svg';
import Header from "./components/header";
import Footer from "./components/footer";
import Layout from "./components/layout";
import Body from "./components/body";
import Container from '@material-ui/core/Container';

import './css/App.css';
const marginfromtop = {
  marginTop: "25px"
}
function App() {
  return (
    <div className="App">
    <Header />
    <Container style={marginfromtop} maxWidth="lg" >
      <Body />
     </Container>
    <Footer />
    </div>
  );
}

export default App;
