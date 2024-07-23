import { useState } from 'react';
import Rating from './components/Rating';
import Thankyou from './components/Thankyou';

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentScore, setCurrentScore] = useState(null);

  function handleSubmit(score) {
    setCurrentScore(score);
    setIsSubmitted(true);
  }

  return (
    <div className='bg-very-dark-blue h-screen flex items-center justify-center'>
      <div className='min-w-[327px] max-w-[412px] mx-6 bg-[#181e27] rounded-[15px] sm:rounded-[30px] px-6 pt-6 sm:px-9 sm:pt-8 pb-8'>
        {isSubmitted ? (
          <Thankyou score={currentScore} />
        ) : (
          <Rating onSubmit={handleSubmit} />
        )}
      </div>
    </div>
  );
}
export default App;
