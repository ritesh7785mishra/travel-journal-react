
import './App.css'
import data from "./data"
import Header from "./components/Header"
import MainContent from "./components/MainContent"


export default function App() {

  const card = data.map(function(item){
    return(
      <div>
         <MainContent

          {...item}

          />
        <hr/>
      </div>
     
    
    )
  })

  return (
      <div className="app">
        <Header/>
        {card}
      </div>
  );
}


