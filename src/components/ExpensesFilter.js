import React,{useState} from 'react';

const NewExpense = () => {

    const [selectedYear,setSelectedYear] = useState(2021);

    const onSubmitHandler = () =>{
        console.log('submitted')
    }

    const selectChangeHandler = (event) => {
        event.preventDefault()
        setSelectedYear(event.target.value)
        // console.log(selectedYear)
    }


    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <div>
                    {/* <label className="expense-label">Date</label> */}
                    <select className="expense-input" onChange={selectChangeHandler} value={selectedYear}>
                        <option value='2019'>2019</option>
                        <option value='2020'>2020</option>
                        <option value='2021'>2021</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default NewExpense;