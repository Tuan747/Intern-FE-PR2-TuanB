import Header from "./layout/Header/header";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Movies from './pages/movies/movies'
import Schedule from "./pages/schedule/schedule";
import Promotion from "./pages/promotion/promotion";
import News from "./pages/news/news";
import Footer from "./layout/Footer/footer";
import Contact from "./pages/contact/contact";

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Redirect exact from="/" to="/phim" />
                    <Route path="/phim" component={Movies} />
                    <Route path="/lich" component={Schedule} />
                    <Route path="/khuyenmai" component={Promotion} />
                    <Route path="/tintuc" component={News} />
                    <Route path="/lienhe" component={Contact} />
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
