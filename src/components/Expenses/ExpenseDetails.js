
import './ExpenseDate.css';

const ExpenseDetails = (props) => {
    const LocationOfExpenditure = 'india';

    return(  
    <div className="expense-item__description">
    <h2>{props.title}</h2>
    <div className="expense-item__description">{LocationOfExpenditure}</div>
    <div className="expense-item__price">${props.amount}</div>
    </div>
 );
}

export default ExpenseDetails;