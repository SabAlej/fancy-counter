import { useEffect, useState } from 'react';
import Count from './Count';
import ButtonContainer from './ButtonContainer';
import ResetButton from './ResetButton';
import Title from './Title';
import CountButton from './CountButton';
import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';

function Card() {
  const [count, setCount] = useState(0);
  const locked = count === 5;

  const handleKeyDown = e => {
    const newCount = count + 1;
    if (e.code === 'Space') {
      newCount > 5 ? setCount(0) : setCount(newCount);
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [count]);
  return (
    <div className={`card ${locked ? 'card--limit' : ''}`}>
      <Title locked={locked} />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer>
        <CountButton
          type={MinusIcon}
          setCount={setCount}
          increment={-1}
          locked={locked}
        />
        <CountButton
          type={PlusIcon}
          setCount={setCount}
          increment={1}
          locked={locked}
        />
      </ButtonContainer>
    </div>
  );
}
export default Card;
