import logo from '../../src/assets/logo.png'

export default function Header({ setModalVisible }: { setModalVisible: any }) {

    return <header className='flex justify-between align-item items-center flex-wrap container  py-6 mb-3 gap-y-10   '>
        <img className='max-w-full' src={logo} alt="windbnb" />
        <div className=' rounded-2xl  bg-[#f2f2f2] text-xs sm:text-base shadow-header flex gap-x-[2px]'
            onClick={() => { setModalVisible(true) }}
        >
            <p className=' rounded-l-2xl text-textPrimary  bg-white py-4 px-3'>Helsinki, Finland</p>
            <p className='bg-white text-[#bdbdbd] py-4 px-3'>Add guests</p>
            <span className='rounded-r-2xl text-[#EB5757E5] bg-white py-4 px-3'>icon</span>
        </div>
    </header>
}