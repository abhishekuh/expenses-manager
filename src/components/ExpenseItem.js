import './ExpenseItem.css'
function ExpenseItem(expData) {
    return(
        <div className="expense-card">
         <p className="content-margin">{expData.date}</p>
         <p>{expData.title}</p>
         <p className="content-margin">{expData.cost}</p>
         </div>
    );
}
export default ExpenseItem;