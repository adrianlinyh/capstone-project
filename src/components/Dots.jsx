import threedots from '../assets/svg/threedots.svg'

export default function Dots () {
    return(
        <div className='flex items-center justify-center fixed left-0 right-0 bottom-0 top-0 z-50'>
            <div>
                <img src={threedots} alt='Loading..' className='h-8' />
            </div>
        </div>
    )
}