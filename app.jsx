import React,{ useState, Suspense } from "react";
import "./myroutes.css";
import { BrowserRouter, Routes, Route,  NavLink } from "react-router-dom"
import HomeComp from "./component/homecomponent";

 //  import AquamanComp from "./component/aquamancomp";
//  import BatmanComp from "./component/batmancomp";
 // import BatMovie1Comp from "./component/batmoviecomponent";
//  import HomeComp from "./component/homecomponent";
//   import NotFoundComp from "./component/notfoundcomp";
//  import SupermanComp from "./component/supermancomp";
//  import WonderWomen from "./component/wonderwomencomponent";
//  import myroutes from "./myroutes.css";
 
let AquamanComp =     React.lazy( () => import('./component/aquamancomp') );
let BatmanComp  =     React.lazy( ()=> import("./component/batmancomp") );
let BatMovie1Comp  =  React.lazy( ()=> import("./component/batmoviecomponent") );
let BatMovie2Comp  =  React.lazy( ()=> import("./component/batmovie2component") );
let BatMovie3Comp =   React.lazy( ()=> import("./component/batmovie3component") );
let  NotFoundComp =   React.lazy( ()=> import("./component/notfoundcomp") );
let SupermanComp  =   React.lazy( ()=> import("./component/supermancomp") );
let WonderWomen  = React.lazy( ()=> import("./component/wonderwomencomponent") ); 
 
function App() {
  let [quantity, setQuantity] = useState(0)
  let activeFun1 = ({isActive})=> isActive ? 'box' : 'plainBox';
  let activeFun2 = ({isActive})=> {
    return {
      width: "200px",
      display: "inline-block",
      backgroundColor: isActive ? "crimson" : "darkorange",
      color:  "papayawhip",
      textAlign: "center",
      padding: "5px",
    }
  };
 
  return (
    <div>
      <h1>React Routing 101</h1>
      <label htmlFor="qty">Set Quantity for Wonder Women</label>
      <input id="qty" value={quantity} onChange={(evt)=> setQuantity(evt.target.value)} type="range" />
      <b> { quantity }</b>
      <BrowserRouter>
       {/*  <ul>
          <li><Link to="/">Home Component</Link></li>
          <li><Link to="batman">Batman Component</Link></li>
          <li><Link to="superman">Superman Component</Link></li>
          <li><Link to="wonderwomen">Wonder Women Component</Link></li>
          <li><Link to="aquaman">Aquaman Component</Link></li>
          <li><Link to="flash">Flash Component</Link></li>
          <li><Link to="cyborg">Cyborg Component</Link></li>
        </ul> */}
 
        <ul>
          <li><NavLink end className={activeFun1} to="/">Home Component</NavLink></li>
          <li><NavLink style={ activeFun2 } to="/batman">Batman Component</NavLink></li>
          <li><NavLink className={ activeFun1 } to="/batman/movie1">Batman Movie1</NavLink></li>
          <li><NavLink className={ activeFun1 } to="/batman/movie2">Batman Movie2</NavLink></li>
          <li><NavLink className={ activeFun1 } to="/batman/movie3">Batman Movie3</NavLink></li>
          <li><NavLink className={ ({isActive})=> isActive ? 'box brdr' : 'plainBox' } to="/superman">Superman Component</NavLink></li>
          <li><NavLink className={ ({isActive})=> isActive ? 'box' : 'plainBox' } to="/wonderwomen">Wonder Women Component</NavLink></li>
          <li><NavLink className={ ({isActive})=> isActive ? 'box' : 'plainBox' } to={"/wonderwomen/"+quantity}>Wonder Women Component with params</NavLink></li>
          <li><NavLink className={ ({isActive})=> isActive ? 'box' : 'plainBox' } to="/aquaman">Aquaman Component</NavLink></li>
          <li><NavLink className={ ({isActive})=> isActive ? 'box' : 'plainBox' } to="/flash">Flash Component</NavLink></li>
          <li><NavLink className={ ({isActive})=> isActive ? 'box' : 'plainBox' } to="/cyborg">Cyborg Component</NavLink></li>
        </ul>
        
        <Routes>
            {/* <Route path="" element={<h1>welcome home</h1>}/> */}
            <Route path="/" element={<HomeComp/>}/>
            <Route path="/batman" element={<Suspense fallback={<>loading...</>}> <BatmanComp/> </Suspense>}>
                <Route path="/batman/movie1" element={<Suspense fallback={<>loading...</>}> < BatMovie1Comp/> </Suspense>}></Route>
                <Route path="/batman/movie2" element={<Suspense> <BatMovie2Comp/> </Suspense>}></Route>
                <Route path="/batman/movie3" element={<Suspense fallback={<>loading...</>}> <BatMovie3Comp/> </Suspense>}></Route>
            </Route>
            <Route path="/superman" element={<Suspense fallback={<>loading...</>}> <SupermanComp/> </Suspense>}/>
            <Route path="/wonderwomen" element={<Suspense fallback={<>loading...</>}> <WonderWomen/></Suspense>}/>
            <Route path="/wonderwomen/:qty" element={<Suspense fallback={<>loading...</>}> <WonderWomen/></Suspense>}/>
            <Route path="/aquaman" element={<Suspense fallback={<>loading...</>}> <AquamanComp/></Suspense>}/>
            <Route path="/flash" element={<Suspense fallback={<>loading...</>}> <SupermanComp/></Suspense>} />
            <Route path="*" element={<Suspense fallback={<>loading...</>}> <NotFoundComp/> </Suspense>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
 
export default App;
 
 
// npm i react-router-dom
// BrowserRouter
  // Routes
    // Route
      // Component
      // Link


 
 
