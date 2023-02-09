import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPage from './Pages/SearchPage';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    {/* home page, component 1*/}
                    <Route exact path="/" element={<Home />} />
                    {/* search page, AKA search result component 2 */}
                    <Route path="/search" element={<SearchPage />}/>
                </Routes>
            </Router>
        </div>
    );
};

export default App;
