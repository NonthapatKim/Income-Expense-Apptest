import { useContext } from "react"
import Datacontext from "../data/DataContext"

const ReportComp = () => {
    const {income, expense} = useContext(Datacontext)
    const formatNumber = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1')
    }
    return(
        <div className="container text-center mt-5 mb-3">
            <h2>ยอดคงเหลือ</h2>
            <h1 className="text-success">{formatNumber((income-expense).toFixed(2))} บาท</h1>
            <div className="report-des mt-5">
                <div className="row">
                    <div className="col-6 inc">
                        <h4>รายได้ทั้งหมด</h4>
                        <h5 className="text-primary">{formatNumber(income)} บาท</h5>
                    </div>
                    <div className="col-6 exp">
                        <h4>รายจ่ายทั้งหมด</h4>
                        <h5 className="text-danger">{formatNumber(expense)} บาท</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReportComp