import React, { ChangeEvent } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // const user = { name: 'John', age: 25, city: 'New York' }; 
  // console.log(user.age)
  // console.log(user.city)
  // console.log(user.name)

  // const fruits = ['apple', 'banana', 'orange']
  // console.log(fruits[1])
  // console.log(fruits[2])


//   const person = { name: 'Alice', age: 30 }; 
// // Деструктуризация в параметрах функции 
// function printPersonDetails({name, age}: any) { 
//  console.log(`Name: ${name}, Age: ${age}`); 
// } 
// printPersonDetails(person);


// const car = { brand: 'Toyota', model: 'Camry', year: 2022 }; 
// console.log(car.brand);  // 'Toyota' 
// console.log(car.model);  // 'Camry' 
// console.log(car.year); 


// const students = [ 
//   { name: 'Alex', grade: 'A' }, 
//   { name: 'Emma', grade: 'B' }, 
//   { name: 'Chris', grade: 'C' }, 
//  ]; 
// console.log(students[0].name)
// console.log(students[2].name)


// const person: any = { firstName: 'Max', lastName: 'Johnson' }; 
// person.age = 25
// person.firstName='Nina'
// person.lastName='Ivanov'
// console.log(person.firstName)
// console.log(person.lastName)
// console.log(person.age)




// const arr = ['katya', 'slava', 'dima', 'nastya']
// console.log(arr)
// arr.push('oleg')
// console.log(arr)
// arr.pop()
// console.log(arr)
// arr.unshift('oleg')
// console.log(arr)
// arr.shift()
// console.log(arr)


// type usersArray = {
//   name: string
//   age: number
// }
// let users: usersArray[] = [ 
//   { name: 'Alice', age: 25 }, 
//   { name: 'Bob', age: 20 }, 
//   { name: 'Charlie', age: 22 }, 
//  ]; 
//  console.log(users.sort((a,b)=> a.age > b.age? 1: -1))
// //  console.log(users.sort((a:number, b:number)=> a>b))


// type eventsType = {
//   name: string
//   date: any
// }
// let events: eventsType[] = [ 
//   { name: 'Event 1', date: new Date('2024-03-08T10:30:00') }, 
//   { name: 'Event 2', date: new Date('2024-03-09T14:00:00') }, 
//   { name: 'Event 3', date: new Date('2024-03-07T09:00:00') },  
//  ]; 
//  console.log(events.sort((a,b)=> a.date > b.date ? 1:-1))


// let tasksString = 'Помыть посуду, Погулять с собакой, Сделать покупки'; 
// console.log(tasksString.split(', '))


let todoList1 = ['Покормить кота', 'Помыть посуду', 'Сделать уроки']; 
let todoList2 = ['Погулять с собакой', 'Сходить в магазин', 'Позвонить маме']; 

let todoList3 = todoList1.concat(todoList2)
console.log(todoList3)

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
