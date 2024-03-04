import MainPageBanner from '@/components/mainPage/MainPageBanner';

const cols = (num: number) => `grid-cols-${num}`

export default function MainPage() {
    return (
        <>
            <MainPageBanner />
            fdsfsdfs
            <h1>dsadasdasds</h1>

            <div className={`grid ${cols(4)} gap-2 bg-slate-500`}>
                <div className='bg-red-400 h-7'></div>
                <div className='bg-red-400 h-7'></div>
                <div className='bg-red-400 h-7'></div>
                <div className='bg-red-400 h-7'></div>
                <div className='bg-red-400 h-7'></div>
                <div className='bg-red-400 h-7'></div>
                <div className='bg-red-400 h-7'></div>
                <div className='bg-red-400 h-7'></div>
            </div>
        </>
    )
}