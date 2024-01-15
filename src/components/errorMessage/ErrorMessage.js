import img from './error.gif';

const ErrorMessage = () => {
    return (
        <img style={{display: 'block', width: '250px', height: '250px', objectFit: 'contain', margin: 'auto', borderRadius: '50%'}} alt='error' src={img}/>
    )
}

export default ErrorMessage;