import spinnerblock from '../assets/svg/spinnerblock.svg';

export default function Block() {
    return (
        <div className='position-fixed top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center bg-black'>
            <div>
                <img src={spinnerblock} alt='Loading...' />
            </div>
        </div>
    );
}
