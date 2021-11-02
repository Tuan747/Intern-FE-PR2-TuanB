import { Container } from "reactstrap";
import Header from "./layout/Header/header";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Movies from './pages/movies/movies'
import Schedule from "./pages/schedule/schedule";
import Promotion from "./pages/promotion/promotion";
import News from "./pages/news/news";

function App() {
    return (
        <Container className="App">
            <Router>
                <Header />
                <Switch>
                    <Redirect exact from="/" to="/phim" />
                    <Route path="/phim" component={Movies} />
                    <Route path="/lich" component={Schedule} />
                    <Route path="/khuyenmai" component={Promotion} />
                    <Route path="/tintuc" component={News} />
                </Switch>
            </Router>
        </Container >
    );
}

export default App;
