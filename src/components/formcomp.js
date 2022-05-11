import { useEffect, useState } from "react"
import { v4 as uuiddv4 } from 'uuid';

const Formcomp = (props) => {
    
    const [title,setTitle] = useState('')
    const [amount,setAmount] = useState(0)
    const [formValid,setformValid] = useState(false)

    const inputtitle = (event) => {
        setTitle(event.target.value)
    }

    const inputnumber = (event) => {
        setAmount(event.target.value)
    }

    const saveItem = (event) => {
        event.preventDefault()
        console.log("เขาว่าสายตามันหลอกกันไม่ด้ายยยยยยยยยยยยยยยยยยยยยย")

        const Itemdata = {
            id: uuiddv4(),
            title: title,
            amount: Number(amount)
        }

        props.onAdditem(Itemdata)
        setTitle('')
        setAmount(0)
    }

    useEffect(() => {
        const checkData = title.trim().length > 0 && amount !== 0
        setformValid(checkData)
    },[title, amount])

    return(
        <>
            <form onSubmit={saveItem}>
                <div className="container mt-3 mb-3">
                    <div className="row">
                        <div className="col-12">
                            <div className="mb-3">
                                <label className="form-label">ชื่อรายการ</label>
                                <input type="text" className="form-control" placeholder="ชื่อรายการ" onChange={inputtitle} value={title}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">จำนวนเงิน</label>
                                <input type="number" className="form-control" placeholder="(รายรับ +), (รายจ่าย -)" onChange={inputnumber} value={amount}/>
                                <small className="text-danger">จำนวนรายจ่าย ต้องใส่เครื่องหมาย - ข้างหน้าตัวเลขเท่านั้น</small>
                            </div>
                            <div className="d-grid gap-2">
                                <button type="submit" className="btn btn-primary" disabled={!formValid}>เพิ่มข้อมูล</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Formcomp