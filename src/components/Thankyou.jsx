import thankyou from '../assets/illustration-thank-you.svg';
function Thankyou({ score }) {
  return (
    <div className='py-3 flex flex-col items-center'>
      <img
        src={thankyou}
        alt='thank you illustration'
        className='w-36 sm:w-[162px] mb-6 sm:mb-8'
      />
      <p className='text-orange text-sm sm:text-[15px] leading-[22px] sm:leading-[24px] py-[5px] px-3 sm:px-5 bg-dark-blue rounded-[22.5px] mb-6 sm:mb-8'>
        You selected {score} out of 5
      </p>
      <h1 className='text-white text-2xl sm:text-[28px] font-bold mb-3'>
        Thank you!
      </h1>
      <p className='text-center text-sm sm:text-[15px] leading-[22px] sm:leading-[24px] text-light-grey'>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
export default Thankyou;
