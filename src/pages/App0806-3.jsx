import React from 'react'
import Employee from '../components/Employee'


//建立物件資料
// const employees = {
//     emp1: {
//         name: "white",
//         age: "12"
//     },
//     emp2: {
//         name: "black",
//         age: "13"
//     },
//     emp3: {
//         name: "yellow",
//         age: "14"
//     }

// }

//建立陣列物件資料
const arrEmployees = [
    {
        id: 1,
        name: "white",
        age: "12",
        h: "180",
        w: "70"
    },
    {
        id: 2,
        name: "black",
        age: "13",
        h: "189",
        w: "68"
    },
    {
        id: 3,
        name: "yellow",
        age: "14",
        h: "183",
        w: "74"
    },
    {
        id: 4,
        name: "gray",
        age: "15",
        h: "184",
        w: "77"
    }
]

const App = () => {
    return (
        <div>
            <h1>員工資料</h1>

            {/* 呼叫員工元件，使用陣列物件:搭配map */}
            {arrEmployees.map((emp) => {
                return <Employee key={emp.id} name={emp.name} age={emp.age} h={emp.h} w={emp.w}/>
            })}
            {/* {arrEmployees.map((emp) => (
                <Employee key={emp.id} name={emp.name} age={emp.age}/>
            ))} */}

            {/* 呼叫員工元件，使用物件資料
            <Employee name={employees.emp1.name} age={employees.emp1.age}></Employee>
            <Employee name={employees.emp2.name} age={employees.emp2.age}></Employee>
            <Employee name={employees.emp3.name} age={employees.emp3.age}></Employee> */}
        </div>
    )
}

export default App