
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
    return (
    <div className='expenses'>
        {props.items.map(props => (
        <ExpenseItem key={props.title} props={props} />
      ))} 
    </div>
)}

export default Expenses;