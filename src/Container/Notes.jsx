import React ,{useState} from 'react';
import './Notes.css';
import img1 from './img1.jpg';
import { BsPlusLg ,BsCalendarDate} from 'react-icons/bs';
import { MdDeleteForever } from 'react-icons/md';

const Notes = () => {
  const[inputs,setInputs]=useState({});
  
 const[update,setUpdate]=useState([]);
 const addItem=() =>{{setUpdate([...update,myNewInput]);} setInputs({ field1:"", field2: "" });}

 const myNewInput={
  name:inputs.field1,
  date:inputs.field2
 }
 
  return (
    <div className='notes_main'>
      <div className="image"><img src={img1} alt="main-image" className='image-img' width="90%" height="250px"/></div>
          <div className="notes_up">
           <div className="notes_up_1"><button className='btn1' onClick={addItem}><BsPlusLg/></button></div>
                                       <div className="notes_up_2">
                                       <input key="field1" name="field1" className='notes_up_2_input' placeholder='Type...' onChange={({target}) => setInputs(state => ({...state,field1:target.value}))} value={inputs.field1}/>
                                        </div>
           <div className="notes_up_3">
                                        <div className="notes_up_3_date">
                                        <input key="field2" name="field2"  className='notes_up_3_date_input' placeholder='dd/mm/yyyy' onChange={({target}) => setInputs(state => ({...state,field2:target.value}))} value={inputs.field2}/>
                                        </div>
                <div className="notes_up_3_icon"><BsCalendarDate/></div>
           </div>
        </div>
        <span className="notes_delete"><button className='notes_delete_btn'>
        DELETE ALL 🥵</button></span>
       
         {update.map((curElem,index) => {
          return(
                   <div key={index}><div/>
                  <div className="notes_down">
          <div className="notes_down_left">
          <div className="notes_down_1">{curElem.name}</div>
          <hr />
          <div className="notes_down_2"><h3>{curElem.date}</h3></div>
          </div>
          <div className="notes_down_right"><button><MdDeleteForever/></button>
          </div>
          </div>
        </div>
                
          )
         })}
          
</div>
  )
        }
export default Notes