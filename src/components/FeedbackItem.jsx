import {FaTimes} from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from './shared/Card'

function FeedbackItem({item, handleDelete}) {
    return (
        // card class specified in index.css and does all styling
        <Card reverse={true}>
            {/* Creates number display */}
            <div className="num-display">{item.rating}</div>
            
            {/* Creates button that is reactive (by passing in a callback function) */}
            <button onClick={() => handleDelete(item.id)} className="close">
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