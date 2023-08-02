import './ExpenseItem.css';
function ExpenseItem(){
    return (
        <div className='expense-item'> 
            <div>March 12 2023</div>
            <div className='expense-item_description'>
                <h2>Car Insurance</h2>
                <div className='expense-item_price'>$200</div>
            </div>
        </div>
    );

}
export default ExpenseItem;