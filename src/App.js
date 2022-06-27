import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutIconLink from './components/AboutIconLink'
import AboutPage from './pages/AboutPage'
import {FeedbackProvider} from './context/FeedbackContext' //for non-default exports you must put {}, see FeedbackContext.js to see that we manually put 'export const'

function App() {
    return (
        // Wraps context around this, can use all the functions and states stored in context by calling useContext
        <FeedbackProvider>
            <Router>
                
                {/* This imports the Header component we built */}
                <Header/>

                {/* Important: must use 'className' instead of 'class' for JSX (version of HTML used in React) */}
                {/*Important: this return must only have 1 html component*/}
                <div className='container'>
                    <Routes>
                        <Route exact path='/' element={
                            <>
                                <FeedbackForm />
                                <FeedbackStats />
                                <FeedbackList />
                            </>
                        }></Route>

                        <Route path='/about' element={<AboutPage/>} />
                    </Routes>

                    <AboutIconLink />
                </div>
            </Router>
        </FeedbackProvider>
    )
}

export default App