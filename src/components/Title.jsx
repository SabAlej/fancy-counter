export default function Title({ locked }) {
  return (
    <h1 className='title'>
      {locked ? (
        <span>
          LIMIT! BUY <b>PRO</b> FOR &gt;5
        </span>
      ) : (
        'Fancy Counter'
      )}
    </h1>
  );
}
