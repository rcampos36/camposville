import { roboto } from '../components/styles/fonts'

export default function Logo() {
  return (
    <div className={roboto.className}>
      <div className='flex items-center flex-row-reverse gap-2 '>
        <h4 className='font-bold flex flex-col justify-center items-center max-sm:text-2xl'>Camposville <span className='text-sm -mt-2'>An Organic Farm</span></h4>
        <img className='w-[56px] h-[83px] max-sm:w-[36px] max-sm:h-[53px]' src='/images/Logo.png' alt='logo'/>
      </div>
    </div>
  )
}
