import FormInput from '@/components/form/FormInput'
import { InputMask } from '@react-input/mask';
import Button from '@/components/form/Button'

export default function MainPageBanner() {
    return (
        <div className="bg-mainPageBannerBg bg-cover bg-center">
            <div className="holder flex flex-col justify-normal lg:flex-row lg:justify-between max-xl:px-0 min-h-[430px]">
                <div className="bg-white/90 px-20 py-5 max-w-full lg:max-w-[520px]">
                    <h1 className="my-5">Best moving and storage companies in the US</h1>
                    <form className='flex flex-col'>
                        <FormInput classNameGroup='mb-5' id="full-name" label="Full name" />
                        <InputMask classNameGroup='mb-5' component={FormInput} mask="+1-___-___-____" replacement="_" id=' phone-number' label="Phone Number" />
                        <p className='text-[22px] font-bold text-gray-150 mb-5'>Receive moving quotes for free</p>
                        <div className='text-center mb-5'>
                            <Button onClick={() => { console.log('321321321') }} icons={['icon-box', 'icon-package', 'icon-delivery']}>Calculate</Button>
                        </div>
                    </form>
                </div>
                <div className="group flex flex-col align-middle justify-center">
                    <div className='bg-white rounded-md px-10 py-7 max-w-[530px] max-h-[348px] relative after:h-8 after:absolute after:w-full after:left-0 after:right-0 after:bottom-5 after:bg-gradient-to-t from-white via-white to-transparent'>
                        <div className='overflow-y-auto h-full font-light scrollbar-thin scrollbar-thumb-primary scrollbar-track-gray-50 pr-2'>
                            <p>Choosing companies that help you move is one of the most important decisions you can make in order to have a fast, safe, efficient and trouble-free relocation. Nowadays, there are many different companies providing a wide range of services, so it is very difficult to make the right choice. Regardless of whether you move locally or long-distance, it is important to be able to find the best moving and storage companies in the United States. Relocation can be an overwhelming process requiring a lot of time, effort and responsibility which is why you must find a moving company that handles your belongings with the utmost care.</p>
                            <p>
                                When someone is searching for the best moving company, they spend a lot of time reading reviews, checking credentials, etc. Locating the most suitable, reliable and trustworthy mover, out of the numerous moving companies that exist, takes a lot of work. It would be a relief to find a reputable source that has a list of moving and packing companies in the United States and that is why our website provides you with the most reliable and thoroughly reviewed companies, all of which offer a wide array of local and long distance moving services.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}