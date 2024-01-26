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
import {HashRouter,Routes,Route, useNavigate} from 'react-router-dom'
import { useEffect } from 'react';
import Menu from './components/Menu';
import { toContainElement } from '@testing-library/jest-dom/dist/matchers';
import Info from './components/Info';
import img from './components/t.jpg'
import img2 from './components/l.jpg'
import LoginButton from './components/LoginButton';
import Contact from './components/Contact';
import Abut from './components/Abut';

function App() {


  const [planOpt,setPlenOpt] = useState([])
  const [sort, setSort] = useState("");
  const [tempFlight,setTempFlight] = useState([])
const[flag,setFlag] = useState(false)
  const [newFlight,setNewFlights] = useState([])
  const [vall, setVal] = useState("");
  const [showAddFlight, setShowAddFlight] = useState(false);
  const [showAllFlight, setShowAllFlight] = useState(false);
const [showSortFlight,setShowSortFlight] = useState(false)
const [showLogin ,setShowLogin] = useState(false)
const [showDelFlight,setShowDelFlight] = useState(false)
const [showLoginButton,setShowLoginButoon]=useState(true)
const[showContact,setShowContact]=useState(false)
  const [showAbut,setShowAbut] = useState(false)
  

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
alert('הטיסה נוספה בהצלחה')
  setPlenOpt([...planOpt,temp])
  
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
const toggleAddFlight = () => {
  setShowAddFlight(true); // מציג רק את AddFlight
  setShowAllFlight(false); // מסתיר את AllFlight
  setShowSortFlight(false)
  setShowDelFlight(false)
  setShowLogin(false)
  setShowAbut(false)
  setShowContact(false)
};

const toggleAllFlight = () => {
  setShowAllFlight(true); // מציג רק את AllFlight
  setShowAddFlight(false); // מסתיר את AddFlight
  setShowSortFlight(false)
  setShowLogin(false)
  setShowDelFlight(false)
  setShowAbut(false)
  setShowContact(false)
};


const toggleSortlight = ()=>{
  setShowSortFlight(true)
  setShowAddFlight(false); 
  setShowAllFlight(false);
  setShowLogin(false)
  setShowDelFlight(false)
  setShowAbut(false)
  setShowContact(false)
}

const toggleLogin = ()=>{
  setShowAllFlight(false); 
  setShowSortFlight(false);
  setShowLogin(true)
  setShowAddFlight(false)
  setShowDelFlight(false)
  setShowAbut(false)
  setShowContact(false)
}

const toggleDelFlight = ()=>{
  setShowDelFlight(true)
  setShowSortFlight(false)
  setShowAddFlight(false); 
  setShowAllFlight(false);
  setShowLogin(false)
  setShowAbut(false)
  setShowContact(false)
}
const toggleExit = ()=>{
  setShowDelFlight(false)
  setShowSortFlight(false)
  setShowAddFlight(false); 
  setShowAllFlight(false);
  setShowLogin(false)
  setShowLoginButoon(true)
  setShowAbut(false)
  setShowContact(false)
}
const toggleAfterFlight = ()=>{
  setShowDelFlight(false)
  setShowSortFlight(false)
  setShowAddFlight(false); 
  setShowAllFlight(true);
  setShowLogin(false)
  setShowLoginButoon(false)
  setShowAbut(false)
  setShowContact(false)

} 

const toogleContact = ()=>{
  setShowDelFlight(false)
  setShowSortFlight(false)
  setShowAddFlight(false); 
  setShowAllFlight(false);
  setShowLogin(false)
  setShowLoginButoon(true)
  setShowAbut(false)
  setShowContact(true)
}

const toogleAbut = ()=>{
  setShowDelFlight(false)
  setShowSortFlight(false)
  setShowAddFlight(false); 
  setShowAllFlight(false);
  setShowLogin(false)
  setShowLoginButoon(true)
  setShowContact(false)
  setShowAbut(true)
}
  return (
    <div className="App">
   <Info           />
 
<HashRouter>
<div class="container">

</div> 
<h1>Flight Control</h1>
<img style={{width:'280px',height:'100px',position:'relative',right:'720px',top:'-350px',font:'100px'}} src={img2}/>
<div class="image-container">
  <img id="img" src={img} alt="" />
  <h3 id="h3"><h3 style={{fontSize:'50px'}}>Welcome to Flight Control</h3>
  <br/>
   The Leading Destination for Aviation Management
  <br/>
  and Oversight</h3>
 { showLoginButton &&  <LoginButton   toggleLogin = {toggleLogin}        />}
</div>
{showAddFlight && <AddFlight planOpt={planOpt} addPlan={addPlan} />}
{showAllFlight  &&  
 <AllFlight  val = {vall} toggleAllFlight = {toggleAllFlight}  showAllFlight = {showAllFlight} setShowAllFlight = {setShowAllFlight} newFlight = {newFlight} lockFlight = {lockFlight} addPlan ={addPlan} planOpt = {planOpt}  />}

{ showSortFlight && <SortFlight  select = {select}   addPlan = {addPlan}  planOpt = {planOpt}    tempFlight = {tempFlight} sort={sort}  />}
{showLogin && <Signin toggleLogin = {toggleLogin}  setFlag = {setFlag} toggleAfterFlight = {toggleAfterFlight}/>}
{showDelFlight && <DelFlight  del = {del}  planOpt = {planOpt}     />}
{showContact && <Contact           />}
{showAbut && <Abut         />}
<Routes>

<Route  path='/' element = {<Menu  toggleLogin = {toggleLogin} toogleAbut = {toogleAbut} toogleContact = {toogleContact}  toggleAllFlight = {toggleAllFlight} toggleSortlight = {toggleSortlight}    />}          />



  
  <Route path='/ControlPanel' element={<ControlPanel toggleExit = {toggleExit}  toggleDelFlight = {toggleDelFlight} SortFlight = {SortFlight} setShowSortFlight = {setShowSortFlight} toggleSortlight = {toggleSortlight} setShowAllFlight = {setShowAllFlight} showAllFlight = {showAllFlight} toggleAllFlight = {toggleAllFlight} toggleAddFlight={toggleAddFlight} setShowAddFlight={setShowAddFlight} showAddFlight={showAddFlight} />} />

 
  
   
</Routes>
</HashRouter>




    </div>
  );
}

export default App;
