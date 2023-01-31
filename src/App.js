import { useState, useEffect } from 'react';
import './App.css';
let todu_data = JSON.parse(localStorage.getItem("formdata"))
function App() {
  let [inputval,setinputval]=useState({
    name:"",
    email:"",
    Website:"",
    imglink:"",
    gender:"",
    skill:""
  })
  let [data, setdata] = useState([])
  function handleChange(e) {
    console.log(e.target.value, e.target.name)

    setinputval((set)=>{
      set[e.target.name]=e.target.value
      return {...set}
    })

    console.log(inputval)
  }

  function cleanfun(){
    setinputval((set)=>{
      set["name"]=""
      set["email"]=""
      set["Website"]=""
      set["imglink"]=""
      set["gender"]=""
      set["skill"]=""

      return {...set}
    } )

  }

  function savedata(){
    setdata(old=>[...old,inputval])
    // setinputval((set)=>{
    //   set["name"]=""
    //   set["email"]=""
    //   set["Website"]=""
    //   set["imglink"]=""
    //   set["gender"]=""
    //   set["skill"]=""

    //   return {...set}
    // } )
  }
  return (
    <div>
      <header className="App-header">
        Student Enrollment Form
      </header>
      <div className="main-content">
     
          <div className="content border" >
            <div> <label>Name </label> <input style={{ marginLeft: "79px" }} type="text" value={inputval.name} name="name" onChange={handleChange} /> </div>
            <div> <label>Email </label> <input style={{ marginLeft: "83px" }} type="text" value={inputval.email} name="email" onChange={handleChange} /> </div>
            <div> <label>Website </label> <input style={{ marginLeft: "62px" }} type="text" value={inputval.Website} name="Website" onChange={handleChange} /> </div>
            <div> <label>Image link </label> <input style={{ marginLeft: "46px" }} type="text" value={inputval.imglink} name="imglink" onChange={handleChange} /> </div>
            <div className='gender-continer'> <label>Gender <input type="radio" value="Male" checked={inputval.gender =="Male"}  name="gender" onChange={handleChange} /> Male
              <input type="radio" value="Female"  checked={inputval.gender =="Female"}  name="gender" onChange={handleChange} /> Female
            </label>  </div>
            <div className='skill-continer'> <label>Skills <input type="checkbox" name="skill"  value="java" checked={inputval.skill =="java"}   onChange={handleChange} /> JAVA  <input type="checkbox" name="skill" value="html" checked={inputval.skill =="html"}  onChange={handleChange} /> HTML  <input type="checkbox" value="css" checked={inputval.skill =="css"}  name="skill" onChange={handleChange} /> CSS</label> </div>
            <div><button className="button button1" onClick={savedata}>Enroll Student</button> <button className="button button2" type='reset' onClick={cleanfun}>Clean</button> </div>
          </div>
 
        <div className="content">
          <h1 className="txt-align">Enrolled Student</h1>
          <table className='table-body'>
    <tr className='table-header'>
      <th>Description</th>
      <th className='profile-fit'>Image</th>
    </tr>
    {data.map((elm,i)=>{
        return <>
        <tr key={i.toString()}>
        <td><div><b>{elm.name}</b></div>
        <div>{elm.gender}</div>
          <div>{elm.email}</div>
          <div><a href={elm.Website}>{elm.Website}</a></div>
          <div>{elm.skill}</div>
        </td>
        <td ><img src={elm.imglink} width="75px" height="75px" /> </td>
      </tr>
      </>
      })} 
  </table>
        </div>
      </div>
    </div>
  );
}

export default App;
