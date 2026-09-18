import {Link} from 'react-router-dom'
export default function NotFound(){
    return(
        <div className='max-w--3xl mx-auto px-6 py-20 text-center'>
            <h1 className='font-display text-3xl text-ink'>Error 404</h1>
            <p className='font-body text-ink/60 mt-2'>This Page doesn't exist</p>
            <Link to="/" className='text-brass underline mt-4 inline-block'>
            Do you want to return to Home Page?!
            </Link>
        </div>
    )
}