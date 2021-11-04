import Header from "./layout/Header/header";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Movies from './pages/movies/movies'
import Schedule from "./pages/schedule/schedule";
import Promotion from "./pages/promotion/promotion";
import News from "./pages/news/news";
import Footer from "./layout/Footer/footer";
import Contact from "./pages/contact/contact";
import DetailMovie from "./pages/movies/components/detailMovie/detailMovie";
import Loading from "./components/Loading/loading";
import ErrorMessage from "./components/ErrorMessage/errorMessage";

function App() {
    return (
        <div className="App">
            <Router>
                <ErrorMessage />
                <Loading />
                <Header />
                <Switch>
                    <Redirect exact from="/" to="/phim" />
                    <Route path="/phim" component={Movies} />
                    <Route exact path="/lich" component={Schedule} />
                    <Route exact path="/khuyenmai" component={Promotion} />
                    <Route exact path="/tintuc" component={News} />
                    <Route exact path="/lienhe" component={Contact} />
                    <Route exact path="/detailphim/:slug" component={DetailMovie} />
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
