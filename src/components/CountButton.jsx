function CountButton({ type, setCount, increment, locked }) {
  const Icon = type;
  const handleClick = e => {
    setCount(prev => (prev + increment < 0 ? 0 : prev + increment));
    e.currentTarget.blur();
  };
  return (
    <button disabled={locked} onClick={handleClick} className='count-btn'>
      <Icon className='count-btn-icon' />
    </button>
  );
}

export default CountButton;
