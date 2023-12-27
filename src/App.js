import logo from './logo.svg';
import './App.css';
import Signin from './components/SignIn'
import { useState } from 'react';
import AllFlight from './components/AllFlight'
import AddFlight from './components/AddFlight'
import DelFlight from './components/DelFlight'
import 'bootstrap/dist/css/bootstrap.min.css' 
import ControlPanel from './components/ControlPanel'
import SortFlight from './components/SortFlight'
import {HashRouter,Routes,Route} from 'react-router-dom'
import { useEffect } from 'react';



function App() {


  const [planOpt,setPlenOpt] = useState([])
  const [sort, setSort] = useState("");
  const [tempFlight,setTempFlight] = useState([])
  const [flag,setFlag]=useState(false)
  const [newFlight,setNewFlights] = useState([])
  const [vall, setVal] = useState("");




  useEffect(() => {
    localStorage.setItem('myDataKey', JSON.stringify(newFlight));
  }, [newFlight]);

  // טעינת הנתונים מ-Local Storage בטעינה הראשונה
  useEffect(() => {
    const savedData = localStorage.getItem('myDataKey');
    if (savedData) {
      setNewFlights(JSON.parse(savedData));
    }
  }, []);


useEffect(() => {
  console.log("Current flights:", planOpt);
}, [planOpt]);

const del = (flightId) => {
  const numericFlightId = Number(flightId);
  const updatedFlights = planOpt.filter(flight => flight.id !== numericFlightId.toString());
  setPlenOpt(updatedFlights);
};
const addPlan = (n,c,p)=>{
let temp = {
  id:n,
  company:c,
  passengerNumaber:p
}


const specialCharactersAndLetters = /^[a-zA-Z!@#$%^&*()_+[\]{}|;:'"<>,.?/~`]+$/;

if(temp.id == ''){
  document.getElementById('inpt1').style.borderColor = 'red'
  return 
}
if(temp.company == ''){
  document.getElementById('inpt2').style.borderColor = 'red'
  return 
}
if(temp.passengerNumaber == ''){
  document.getElementById('inpt3').style.borderColor = 'red'
  return 
}
if(isNaN(temp.id)){
  alert('the id not a number')
  return 
}
if(temp.id.length >= 5){
  alert('the length of id eror')
  return 
}
if(temp.passengerNumaber >= 1000){
  alert('the passengers on the plan up to 1000 people ')
  return
}

  if(temp.company !=  temp.company.toLowerCase()){
  alert('the company need to be small leters')
  return
  }
  if(!isNaN(temp.company)){
    alert('number Illegal on comapny')
    return 
  }

if(specialCharactersAndLetters.test(temp.passengerNumaber)){
  alert('Invalid character for passenger Number');
  return
}

  setPlenOpt([...planOpt,temp])
  



fetch('/addFlight',{
  headers:{  'Accept': 'application/json',
'Content-Type': 'application/json'},
method:'post',
body:JSON.stringify({
  flightAdd:temp
})
}).then((res)=>{
 return res.json()
}).then((data)=>{
  setFlag(!flag)
})
}


const menu = ()=>{
  if(flag === true){
    return <ControlPanel    />
  }
}

useEffect(()=>{


  if (sort === "") {
    setTempFlight([]);
  }
  if (sort === "low") {
setTempFlight([...planOpt].sort((a,b)=>a.id - b.id))
  }
  if (sort === "high") {
    setTempFlight([...planOpt].sort((a,b)=>b.id - a.id))
  }
},[sort])

useEffect(() => {

  const newFlight = planOpt.filter((value) => {
    return value.company.includes(vall);
  });
  setNewFlights(newFlight);
}, [vall]);


const select = () => {
  return (
    <div id='divSelsect'>
      <select onChange={(e) => setSort(e.target.value)}>
        <option value="">select flight number</option>
        <option value={"low"}>low to high</option>
        <option value={"high"}>high to low</option>
      </select>
    </div>
  );
};


const lockFlight = ()=>{
  return(
  <input id='input' type='serch' placeholder='Enter company Name' onChange={(e)=>setVal(e.target.value)}/>
  )
}






  return (
    <div className="App">
      
<HashRouter> 
<h1>Flight Control</h1>
{menu()}    
<Routes>

  <Route path='/'  element = {<Signin   setFlag = {setFlag}/>}  />
<Route path='/controlPanel' element = {<ControlPanel   />}              />
  {planOpt.map((val,index)=>{
 return  <Route path='/allFlight'  element = {<AllFlight val = {vall} newFlight = {newFlight} lockFlight = {lockFlight} addPlan ={addPlan} planOpt = {planOpt} id = {val.id} company = {val.company} numberFlight = {val.passengerNumaber} index = {index}  />}  />
  })}

  <Route path='/add' element = {<AddFlight planOpt = {planOpt}  addPlan = {addPlan}  />} />
  
   <Route path= '/sort' element =  {<SortFlight  select = {select}   addPlan = {addPlan}  planOpt = {planOpt}    tempFlight = {tempFlight} sort={sort}  />} />

  {planOpt.map((val,index)=>{
  return <Route  path='/delFlight'  element = {<DelFlight newFlight = {newFlight} planOpt = {planOpt} del = {del}  id = {val.id} company = {val.company} passengerNumaber = {val.passengerNumaber} index = {index}    />}  />
  

  })}

</Routes>
</HashRouter>




    </div>
  );
}

export default App;
