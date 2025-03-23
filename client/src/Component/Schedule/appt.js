import ScheduleAppt from "./schedule"
import "./appt.css"

// This page houses the scheduling page
const Appt = () =>{
    return(
        <div className="appt">
            <h1 className="h1 pt-2">Book Your Appointment Today!</h1>
            <div className="forms" >
            <ScheduleAppt />
            </div>
        </div>
    )
}

export default Appt