import React, {useState, useEffect} from 'react'
import dividerDesktop from './images/pattern-divider-desktop.svg'
import dividerMobile from './images/pattern-divider-mobile.svg'
import dice from './images/icon-dice.svg'
import axios from 'axios'
import './App.css';
import { Maahmaahyo } from './SomaliMaahmaah'
const Advice_Generator = () => {
    const [advice,setAdvice] = useState("");
    const [adviceIndex, setAdviceIndex] = useState("");


            {/* //////////////////////////////////   START        READ IT FROM THE API FUNCTION HERE...                                                                     */}

    // const getAdvice = async ()=>{
    //   const response = await axios.get("https://api.adviceslip.com/advice");
    //   const advice  = await response.data.slip;
    //    setAdvice(advice);
    // }




        {/* //////////////////////////////////   END             READ IT FROM THE API FUNCTION HERE...                                                                     */}












            {/* //////////////////////////////////   START             READ IT FROM MY FILE SOOMAALI MAAHMAAHYO FUNCTION. HERE...                         */}


    const getAdvice = async ()=>{
      let  maahmaahVar = Maahmaahyo;
       let randomNum = Math.floor(Math.random() * maahmaahVar.length );
    //    console.log("number", randomNum)
    //    console.log(Maahmaahyo[randomNum])
       setAdvice(maahmaahVar[randomNum]);
       setAdviceIndex(randomNum);
    } 


    
         {/* //////////////////////////////////   END        READ IT FROM THE MY FILE SOOMAALI MAAHMAAHYO FUNCTION. HERE..       */}

    
    useEffect(()=>{
      getAdvice()
      
    },[])

  return (
 

    <div className='card'>
        {/* //////////////////////////////////   START                                    READ IT FROM THE API HTML HERE...                                                                     */}
        
        {/* <p>Advice #{advice.id}</p> 
         <h2> {advice.advice}</h2> */}



        {/* //////////////////////////////////   END                                    READ IT FROM THE API HTML HERE...                                                                     */}


        {/* //////////////////////////////////   START                                    READ IT FROM MY FILE HTML HERE...                                                                     */}

         <h3>1000 Maahmaahood oo Soomaali ah</h3>

        <p>Maahmaahda #{adviceIndex+1}  aad</p>
        <h2> "{advice}"</h2>


        {/* //////////////////////////////////   END                                    READ IT FROM THE API HTML HERE...                                                                     */}

        <img src= {dividerDesktop} className='divider-desktop' alt='divider' />
        <img src= {dividerMobile} className='divider-mobile' alt='divider' />

        <div className='dice' onClick={getAdvice}>
            <img src={dice} alt='dice' />

            

        </div>

         
    </div>
  )
}

export default Advice_Generator
