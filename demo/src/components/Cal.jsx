import { useState } from 'react'
function Cal() {

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

 

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <div>
        {count}
      </div>
      <div>
        <button className='m-6  p-3 bg-green-300' onClick={handleIncrement} >+
        </button>
        <button className='m-6 p-3 bg-orange-300' onClick={handleDecrement} >
          -
        </button>
      </div>
    </div>
  )
}

export default Cal
