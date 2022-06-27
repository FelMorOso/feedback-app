import {Link} from 'react-router-dom'
import {FaQuestion} from 'react-icons/fa'

function AboutIconLink() {
    return (
        <div className='about-link'>
            {/* Links are used for internal pages, anchor tags are used for external pages */}
            <Link to='/about'>
                <FaQuestion size={30} />
            </Link>
        </div>
    )
}

export default AboutIconLink