import {FaTimes} from 'react-icons/fa'
import { useContext } from 'react'
import PropTypes from 'prop-types'
import Card from './shared/Card'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({item}) {
    const {deleteFeedback} = useContext(FeedbackContext)
    
    return (
        // card class specified in index.css and does all styling
        <Card>
            {/* Creates number display */}
            <div className="num-display">{item.rating}</div>
            
            {/* Creates button that is reactive (by passing in a callback function) */}
            <button onClick={() => deleteFeedback(item.id)} className="close">
                {/* Creates a purple X*/}
                <FaTimes color='purple'/>
            </button>

            {/* Creates the text that will be displayed on Card */}
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}
  
export default FeedbackItem