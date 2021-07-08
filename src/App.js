import Navbar from './Navbar';
import Home from './Home';
import Create from './CreateBlog';
import Blogdetails from './BlogDetails';
import Four from './bad';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
            <Home />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route path="/blog/:id">
              <Blogdetails />
            </Route>
            <Route path="*">
              <Four/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
