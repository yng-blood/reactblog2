import React from 'react'
import { useContext } from 'react'
import { store } from '../API/FuncionAPI';
import '../../Basic.css'
import { Link } from 'react-router-dom';
const Foodblog = () => {
    const [context]= useContext(store);
   return (
    <>
      <div>
      <h2 style={{textAlign:'center',marginTop:'20px'}}>Latest Food Stories</h2>
          <hr style={{width:'5%',height:'2px',backgroundColor:'red'}}/>
      <div className='bollywoodContainer'>
        <div className='parentFlex'>
        {context.filter((item)=>item.catagory==='Food').map((item,i)=>{
      return( 
      <Link to={`/Food`} key={item.id}> <div className='flex'><img className='flex1' src={item.image} alt='Not found' height={230} width={230}/><br/><div className='re'>{item.Title}</div></div></Link>
      )
  })}
        </div>
    
    </div>
</div>
    </>
  )
}

export default Foodblog;