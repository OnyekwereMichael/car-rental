import Image from 'next/image'
import images from '../../../public/assets'

function page() {
    return (
        <main className='bg-white p-4'>
            <div className='flex items-center justify-between px-4'>
                <div className="flex items-center space-x-12">
                    <Image src={images.pageLogo} alt="image"></Image>
                    <div className="flex items-center">
                        <div className="bg-white p-[7px] w-[400px]  flex items-center justify-between   border-[#C3D4E9] border-[1px] border-solid rounded-full smm:w-[200px] ">
                            <div className="flex gap-2">
                                <Image src={images.SearchLogo} alt="" width={20} className="" />
                                <input
                                    type="text"
                                    className="bg-transparent outline-none rounded-xl "
                                    placeholder="Search something here"
                                />
                            </div>
                            <Image src={images.Filter} alt="" width={20} className="" />
                        </div>
                    </div>
                </div>

                <div className='flex space-x-4'>
                    <Image src={images.LikeIcon} alt='LikeIcon' />
                    <Image src={images.NotificationIcon} alt='Notication' />
                    <Image src={images.SettingIcon} alt='SettingIcon' />
                    <Image src={images.ProfileIcon} alt='ProfileIcon' />
                </div>
            </div>
        </main>
    )
}

export default page
