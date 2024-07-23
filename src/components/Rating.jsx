import { useState } from 'react';
import iconStar from '../assets/icon-star.svg';

const rating = [1, 2, 3, 4, 5];

function Rating({ onSubmit }) {
  const [currentScore, setCurrentScore] = useState(null);

  return (
    <>
      <div className='size-10 sm:size-12 flex items-center justify-center rounded-full bg-dark-blue mb-4 sm:mb-[30px]'>
        <img src={iconStar} alt='icon star' />
      </div>
      <h1 className='text-white text-2xl sm:text-[28px] font-bold mb-3'>
        How did we do?
      </h1>
      <p className='text-light-grey text-sm sm:text-[15px] leading-[22px] sm:leading-[24px] mb-6'>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className='flex items-center justify-between mb-6'>
        {rating.map(score => (
          <a
            key={score}
            className={`size-[42px] sm:size-[51px] flex items-center justify-center rounded-full text-sm sm:text-base sm:tracking-[0.2px] font-bold leading-6 tracking-[0.175px] hover:text-very-dark-blue hover:bg-orange transition-colors cursor-pointer ${
              currentScore === score
                ? 'bg-white text-very-dark-blue'
                : 'bg-dark-blue text-light-grey'
            }`}
            onClick={() => setCurrentScore(score)}
          >
            {score}
          </a>
        ))}
      </div>
      <button
        className='uppercase w-full bg-orange py-[14px] px-[108px] sm:px-[138px] text-very-dark-blue text-sm sm:text-[15px] font-bold tracking-[1.867px] sm:tracking-[2px] rounded-[22.5px] hover:bg-white transition-colors'
        onClick={() => onSubmit(currentScore)}
      >
        submit
      </button>
    </>
  );
}
export default Rating;
