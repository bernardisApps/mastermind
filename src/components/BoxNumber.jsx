import './Styles/BoxNumberStyles.css';

export default function BoxNumber({number, isSelected, onClick}) {

  return (
    <>
      <div className='col' style={{
        backgroundColor: isSelected ? 'red' : 'black',
        color: isSelected ? 'white' : 'white'
      }} 
        onClick={()=>onClick(number)} 
        className='box-number'>
        <h6 className='btn-numero' >{number}</h6>
      </div>
    </>
  );
}