import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Datat from "./components/Datat";
import Formcomp from "./components/formcomp";
import './App.css';
import { useEffect, useState } from "react";

import Datacontext from "./data/DataContext";
import ReportComp from "./components/reportcomp";

import Footerf from "./components/footer";

function App() {
  const [items,setItems] = useState([])

  const [reportIncome,setreportIncome] = useState(0)
  const [resportExpense,setreportExpense] = useState(0)

  const AddnewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem,...prevItem]
    })
  }

  useEffect(() => {
    const amounts = items.map(items => items.amount)
    const income = amounts.filter(e => e > 0).reduce((total,e) => total+=e,0)
    const expense = (amounts.filter(e => e < 0).reduce((total,e) => total+=e,0))*-1
    
    setreportIncome(income.toFixed(2))
    setreportExpense(expense.toFixed(2))
  },[items,reportIncome,resportExpense])

  return (
    <Datacontext.Provider value={{income: reportIncome, expense: resportExpense}}>
      <BrowserRouter>
        <h1 className="text-center mt-5">แอปคำนวณรายรับ-รายจ่าย</h1>
        <div className="container">
          <div className="row">
            <div className="bg-warning p-4 text-center col-6">
              <Link to="/report" className="text-decoration-none text-dark">รายงาน</Link>
            </div>

            <div className="bg-info p-4 text-center col-6">
              <Link to="/insert" className="text-decoration-none text-white">เพิ่มข้อมูล</Link>
            </div>

            <Routes> 
              <Route path="/report" element={<ReportComp/>}></Route> 
              <Route path="/insert" element={<><Formcomp onAdditem={AddnewItem}/> <Datat items={items}/> </>}></Route> 
            </Routes>
          </div>
        </div>

        <Footerf/>
      </BrowserRouter>
    </Datacontext.Provider>
  );
}

export default App;
