
# React

- React is a open source javascript library use to create user interfaces (UI).

- React create single page applications which provide the users better user experience (UX).
- React works with reuseable components.
- React library consist of various methods and properties which helps us to create a website more faster.

Pre requisite to leran react:

- Basic knowledge about HTML tag and CSS properties.
- Basic knowledge about Javascript functions, objects and arrays.
- Knowledge about ES6 features like rest operator, spread operator, de-structuring, arrow function, modules, classes and promises.
- A javascript runtime environment for example:- nodejs with knowledge of npm and npx.

## Features of ReactJS

1. Single Page Application (SPA)
2. Reusable Components
3. Fast Performance (Virtual DOM)
4. Scalability (can redude large Apps)
5. Testability (easy to test)
6. Native Approach (creates mobile applications)
7. Data binding (easy to manupulate data)
8. Big Community (large no. of Developers worldwide)
9. Easy to learn

## History of ReactJS

- ReactJS was developed by Jordan Walke, a software engineer working for Facebook. In 2011
- The fast implementation of react was in the facebook news feeds in the year of 2011, later in 2012 they implement the react in instagram.
- In 2013 JS conference US react become open-source.
- The current version ongoing version of react is 18.3V.
- The biggest update of react introduced in 16.8V which allowed the developer to use more functional oriented components.
- In 16.8V hooks concept introduced.

## NodeJS

- NodeJS is a software environment which allows us to run the javascript code outside of the web browser.

## NPM (node package manager)

- NPM stands for node package manager.
- It is a software registery which store all the javascript libray and packages.
- It is a online storage platform with more then 2 million of javascript packages.

#### To install

```
npm install <packageName>
npm i <packageName>
```

#### To uninstall

```
npm uninstall <packageName>
```

## NPX

- NPX stands for node package execute.
- NPX is a command use to execute javascript packages without installing them.

```
npx <packageName>
```

## Creating a React Application

1. using create-react-app (CRA)

- install nodejs
- install react globally in the system
  > npm i -g react

### Steps

1. npx create-react-app projectname
2. Move to the Project Folder
   > cd projectname
3. Run the Application
   > npm start

## Folder Structure of a React Application

### 1. node_modules

- node_modules folder stores all the third party libraries and packages which are use inside the react application.

### 2. public

- public folder stores all the static files of the application.
- Inside public folder index.html file is presented which is the main html file of the react application.
- This is the only page which will load inside browser (this is known as single page).

### 3. src

- src is the folder where the developer's are going to write source code of the react application.
- Inside src index.js file is presented which is the root javascript file and app.js which is the root react file of the react application.

### 4. .gitignore

- This file is use to prevent pushing unwanted files to the github.

### 5. package.json

- This file store the information about the project and its dependencies packages.
- This file also store the scripting commands to run, build, test the application.

### 6. package-lock.json

- This file stores depth information about all the dependencies packages installed in our application.

## Libraries used inside a React Application

### 2. react-dom

- react-dom library manages every dom manupulation inside the react app.
- Before sending the DOM changes to browser react DOM library verify it which is known as virtual DOM.

### 3. react-scripts

- This library provide the commands to start, build and test the application.

### \*4. eslint

- eslint library is use the handle the errors inside the application and maintains the code standard.

### \*5. webpack

- Webpack is a moudle bundler library its main purpose is to bundle all the javascript files into a single file before given to the browser.

### \*6. Babel

- Babel is a javascript compiler library which use to convert the modern javascript code into browser understanding code.
- This is the library which is helping us to write jsx syntax inside a react component.

### 7. webvitals

- This library use to measure the performace of an application.

### 8. jest

- This library is use for unit testing purpose of the react application.

## JSX

- JSX is stands for javascript extention or javascript XML.
- JSX allows the developer's to write HTML like syntax in a React component.
- JSX is not mandatory but it is the easiest way to embbed HTML elements in React application.

### Rules of JSX

- All the components inside JSX should starts with upper case.
- If a components is returning multiple JSX elements we should wrap them inside a single parent element.

```
function App() {
   return (
      <div>
         <h1>This is app compoenent</h1>
         <First></First>
         <b>Component Ends</b>
      </div>
   )
}
```

- Every tags are paired tags or closing tags inside JSX.

```
const First = () => {
   let msg = "Hello World";
   return (
      <div>
         <h1>This is first component</h1>
      ❌<br>
      ✅<br />
      ✅<br></br>

         {100 + 100}
         <h1>{msg}</h1>
         {console.log("hi from jsx")}

      ❌{for (let i = 0; i <= 5; i++) {
               console.log(i);
         }}

      ❌{if(10 > 5) {
            <h1>10 is greater</h1>
         }}

      ✅{10 > 5 ? <h1>10 is greater</h1>: <h1>10 is smaller</h1>}
      </div>
   )
}
```

- We can write javascript inside JSX using curly braces.
- We cannot write any types of looping statements inside JSX.
- We cannot write any conditional statements inside JSX, for conditions we can use ternary operator's.
- We can write JSX inside the conditional statements or looping statements.

```
const First = () => {
   if (10 > 5) {
      return <h1>{10} is greater</h1>
   } else {
      return <h1>{5 + 5} is smaller</h1>
   }
}
```

- Attributes like class changes to className and for changes to htmlFor.

```
const First = () => {
   return (
      <div>
         <h1 className="heading">Hello</h1>
         <label htmlFor="username">Username:</label>
         <input type="text" id="username" />
      </div>
   )
}
```

- Every event's inside JSX are synthetic event's (inline event's) and convert to camel cases

```
onclick => onClick
onchange => onChange
onsubmit => onSubmit
onkeypress => onKeyPress
```

```
const First = () => {
   function buttonClick() {
      console.log("Button Clicked")
   }
   return (
      <div>
         <h1>EVENTS</h1>
         <button onClick={buttonClick}>Click Here</button>
      </div>
   )
}
```

## Components

- Components are basic building block's of an react application.
- Components are similar to javascript function or classes which returns some DOM elements or JSX elements.
- Components are independent and can be reuse multiple times.
- There are 2 types of component in react application:

1. Function Based Components
2. Class Based Components

### Function Based Components

- The components which are created by using javascript function creation method are known as function based components.

```
function First() {
   return (
      <div>
         <h1>This is First Components</h1>
      </div>
   )
}
export default First
```

### Class Based Components

- The components which are created by using javascript class syntax are known as class based components.
- Every class components should inherit the properties and methods from a parent class React.Component.
- All the class based components are attached with inbuild method and functionalities.
- To return some JSX from a class based components we have to use render method.

```
import React from 'react'

class Third extends React.Component {
   constructor() {
      super()
      this.msg = "It's a class component"
   }
   render() {
      return (
         <div>
            <h1>{this.msg}</h1>
         </div>
      )
   }
}

export default Third
```

## Props (properties)

- Props is an inbuild object inside react components.
- Props are the data which send from a parent component to child component.
- Props send data in a similar way like function arguments (or) HTML attributes
- Props are immutable within a component. They are the data received from a parent component and should not be modified directly by the child component.
- Props are passed as a key-value pair.

#### Example

```
<Component key={value} />
```

## Props in a Class Based Component

#### App.js

```
import React from "react";
import Third from "./Third";

const App = () => {
  let msg = "Good Afternoon";
  return (
    <div>
      <h1>React App</h1>
      <Third name="Rocky" age={25} msg={msg} />
    </div>
  );
};

export default App;
```

#### Third.js

```
import React from "react";

class Third extends React.Component {
  constructor() {
    super();
    this.msg = "It's a class component";
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Name = {this.props.name}</h1>
        <h1>Age = {this.props.age}</h1>
        <h1>Msg = {this.props.msg}</h1>
      </div>
    );
  }
}

export default Third;
```

## Props in a Function Based Component

#### App.js

```
import React from "react";
import First from "./First";

const App = () => {
  let msg = "Good Afternoon";
  return (
    <div>
      <h1>React App</h1>
      <First name={"Virat"} address={"Delhi"} age={35} />
    </div>
  );
};

export default App;
```

#### First.js

```
import React from "react";

const First = (props) => {
  console.log(props);
  const { name, address, age } = props;
  return (
    <div>
      <h1>This is Function Component</h1>
      <h1>Name = {name}</h1>
      <h1>Address = {address}</h1>
      <h1>Age = {age}</h1>
    </div>
  );
};

export default First;
```

## OR

#### First.js

```
import React from "react";

const First = ({ name, address, age }) => {
  return (
    <div>
      <h1>This is Function Component</h1>
      <h1>Name = {name}</h1>
      <h1>Address = {address}</h1>
      <h1>Age = {age}</h1>
    </div>
  );
};

export default First;
```

## Children Props

- The data (or) information which passed in between the component opening and closing tags is called as children props.
- Data passed as children to a component is available within the props object under the children property.

#### Example

```
<Component>
   {data}
</Component>
```

#### App.js

```
import React from "react";
import First from "./First";

const App = () => {
  let msg = "Good Afternoon";
  return (
    <div>
      <h1>React App</h1>
      <First>
        {"Hello Jspider"} <br />
        {"Welcome to the React Class"}
      </First>
    </div>
  );
};

export default App;
```

#### First.js

```
import React from "react";

const First = ({ children }) => {
  return (
    <div>
      <h1>This is Function Component</h1>
      <h1>{children}</h1>
    </div>
  );
};

export default First;
```

## Q. Difference between library and framework?

### Library

- A library is a collection of reusable code that provides a specific functionality or set of functionalities.
- Libraries are typically used to perform a specific task, such as data encryption, compression, or networking.
- When using a library, the developer is in control of the application's flow and decides when to call the library's functions.

### Framework

- A framework, on the other hand, is a more comprehensive structure that provides a set of pre-defined components, tools, and rules to build an application.
- Frameworks often dictate the application's architecture and provide a set of guidelines for development. When using a framework, the developer must adhere to its rules and guidelines to build the application.

### Key differences

Here are the key differences between libraries and frameworks:

#### Control:

- When using a library, the developer is in control of the application's flow.
- When using a framework, the framework dictates the application's architecture and flow.

#### Scope:

- Libraries are typically used to perform a specific task, while frameworks provide a comprehensive structure for building an application.

#### Customization:

- Libraries can be easily customized to fit the developer's needs, while frameworks often require more effort to customize.

## Props Drilling

<img src="https://i.ibb.co/1ryK8Kj/2024-07-31-16-31-20-AI-Eraser.png" style="width: 700px">

- Sending the data from top most parent component to least most child component as a props known as props drilling.

### Advantage

- If every connected component need same data then we can create the data in top most parent component and pass that one as a props to each connected children component.

### Disadvantage

- If any one of the component does not need that data still it have to recive and pass the data to its child component as a props.
- If any changes made in the parent data every connected child components will re-render in the web page this process can decrease the performance of react aplication.

## One Way Data Binding

- a react application followsthe architecture of one way data binding that means we can only send the data from a parent component to child component.
- There is no predefined method or properties by which we can send the data
  from child component to parent component, but we can use our own custom methods as a callback function through which we can send data from child to parent component.

#### App.js

```
import Child from "./Child";

function App() {
  const getAddress = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Child name="Rinku Singh" getAddress={getAddress} />
    </div>
  );
}

export default App;
```

#### Child.js

```
import React from "react";

function Child({ name, getAddress }) {
  let address = "UP";
  function handleClick() {
    getAddress(address);
  }
  return (
    <div>
      <h1>Child Component</h1>
      <button onClick={handleClick}>Send Data</button>
      <b>{name}</b>
    </div>
  );
}

export default Child;
```

#### Inline css in ReactJS

```
import React from "react";

const Child = () => {
  let myStyle = {
    color: "red",
    backgroundColor: "#000",
    fontSize: "30px",
    padding: "20px 30px",
    border: "1px solid #fff",
    margin: "0px",
  };
  return (
    <>
      <h1
        style={{
          color: "red",
          backgroundColor: "#000",
          fontSize: "30px",
          padding: "20px 30px",
          border: "1px solid #fff",
          margin: "0px",
        }}
      >
        Heading
      </h1>
      <p style={myStyle}>Section</p>
    </>
  );
};

export default Child;
```

#### External css in ReactJS

#### App.js

```
import React from "react";
import "./App.css";
import Child from "./Child";

const App = () => {
  return (
    <div>
      <Child />
    </div>
  );
};

export default App;
```

#### App.css

```
* {
  margin: 0;
  padding: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.container {
  width: 80%;
  margin: auto;
}
#heading {
  background: coral;
  color: #fff;
  padding: 10px 0px;
}
.section {
  line-height: 35px;
}
```

#### Child.jsx

```
import React from "react";

const Child = () => {
  return (
    <>
      <h1 id="heading">
        <div className="container">Heading</div>
      </h1>
      <div className="container">
        <p className="section">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
          voluptatum iure commodi ratione architecto! Dignissimos reiciendis quo
          sit dolorum alias illum officiis atque, quia quod rem distinctio eum,
          dolores optio. Cum molestiae voluptate quos non vero, laborum et
          debitis necessitatibus alias possimus expedita aut? Ut ipsa quisquam
          vitae eum culpa sequi explicabo tenetur, dolorem optio consequuntur
          placeat architecto excepturi odio. Nihil, itaque ut ipsam ducimus
          consectetur mollitia. Ipsum impedit consequuntur vel quod temporibus
          natus, reiciendis cum non quidem, nihil illo ad exercitationem magni
          nemo ipsa aperiam nam. Quo, impedit explicabo? Doloribus ut temporibus
          deserunt? Praesentium eligendi reprehenderit aliquam veritatis
          explicabo ipsa quidem dolorum mollitia sapiente delectus ab magnam
          sint, officiis suscipit architecto illum tempore corrupti repellendus
          illo ex labore. Consequatur.
        </p>
      </div>
    </>
  );
};

export default Child;
```

```
import React from "react";
import Image from "./img.jpg";

const Child = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <img
          src="https://assets.promptbase.com/DALLE_IMAGES%2FQyoCIEAadSVXpsO0KGYsgzKu4lp2%2Fresized%2F1688409888663_w_800x800.webp?alt=media&token=e18085c6-e963-4145-9c60-7d398e7cadea"
          alt="Image"
          height={"737px"}
        />
        <img src={Image} alt="Image" height={"737px"} />
        {/* <img src="/img.jpg" alt="Image" height={"737px"} /> */}
      </div>
    </>
  );
};

export default Child;
```

#### Iterating an array

```
import React from "react";

const Child = () => {
  let fruits = ["mango", "grapes", "apple", "banana", "orange"];
  let displayFruits = [];
  for (let fruit of fruits) {
    displayFruits.push(<li>{fruit}</li>);
  }
  return (
    <div>
      <ol>
        {fruits.map((fruit, index) => {
          return <li>{fruit}</li>;
        })}
      </ol>
      {displayFruits}
    </div>
  );
};

export default Child;
```

#### Iterating an object

```
import React from "react";

const Child = () => {
  let student = {
    name: "Rocky",
    age: 24,
    address: "KGF",
    email: "rockybhai@gmail.com",
  };
  let displayStudent = [];
  for (let key in student) {
    displayStudent.push(
      <h1>
        {key}: {student[key]}
      </h1>
    );
  }

  return (
    <div>
      {displayStudent}
      ---------------------
      {/* {console.log(Object.keys(student))} */}
      {/* {console.log(Object.values(student))} */}
      {Object.keys(student).map((key) => {
        return (
          <h1>
            {key}: {student[key]}
          </h1>
        );
      })}
    </div>
  );
};

export default Child;
```

## State

- State is an in-built property in react component(class based component).
- State is component own data.
- State is mutable.
- State is use to perform any dynamic changes inside a component to manage the DOM manupulation in a react application.
- Any updation in state value re-render the component.
- State manages the life cycle of a component from creating to destroying.

### State in a Class Based Component

- State is an in-build property inside class based component that's why they are known as statefull component.
- to create a state value we have to use `this.state` property inside the constructor function.

#### Example

```
this.state = {count: 0}
```

- To modify the state value we are using an in-build method `this.setState()`.

### State in a Function Based Component

- State is not an in-build property in function based component that's why those are known as stateless component.
- To use a state inside function component we have to depend on a `hook` named as `useState()`.
  > ### Note
  >
  > > ### Hook
  > >
  > > Hooks are nothing but some predefined methods introduced in React 16.8 version to achive the in-build features in funciton based component.

#### Syntax

```
const [state, setState] = useState(initialValue)
// setState => function to update the state
```

#### Example

```
const [count, setCount] = useState(0);
```

#### App.js

```
import React from "react";
import FunctionComponent from "./Function";
import ClassComponent from "./Class";

const App = () => {
  return (
    <div>
      <FunctionComponent />
      <ClassComponent />
    </div>
  );
};

export default App;
```

#### Function.js

```
import { useState } from "react";

function FunctionComponent() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Function Component</h1>
      <h1>{count}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default FunctionComponent;
```

#### Class.js

```
import { Component } from "react";

class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    }); // async
    console.log(this.state.count); // previous value
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    }); // async
    console.log(this.state.count); // previous value
  };
  render() {
    console.log("render", this.state.count);
    return (
      <div>
        <h1>Class Component</h1>
        <h1>{this.state.count}</h1>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
export default ClassComponent;

```

# Interview Question

## Q1. What is the difference between state and props?

- In React, props and state are essential concepts for manageing data an passing information between components.
- Understanding the differences and use cases for each is curcial for building robust and maintainable applications.

### Props(Properties)

- `Definition`: Props are read-only data that are passed from a parent component to a child component. They allow components to be customizable and reusable.
- `Usage`: Props are used to transmit data from a parent component to a child component.
- `Passing Props`: Props are passed as attributes to a component in JSX.
- `Accessing Props`: Inside the child component, props are accessed via the `props` object.

### State

- `Definition`: State represents the internal data of a component that can change over time. It allows components to manage thier own data.
- `Usage`: State is used for data that can change within a component and triggers re-rendering when updated.
- `Initializaing State`: State is initialized using the `useState` hook.

- `Updating State`: State should never be modified directly. Instead, use the setter function provided by the hook to update state.

### Props vs State

#### Props:

- Immutable (read-only).
- Passed from parent or child.
- Used for configuring child components.

#### State:

- Mutable (can be updated).
- Managed within a component.
- Used for managing internal component data.

## Q2. Difference between Classbased component and Functionbased component?

### Functional

```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

- A functional component is just a plain Javascript pure function that accepts props as an argument and returns a React element.
- There is no render method used in functional components.
- Also known as Stateless components as they simply accept data and display them in some form, they are mainly responsible for rendering UI.

```
const [name, setName] = React.useState(' ');
```

- Hooks can be easily used in functional components to make them stateful.
- Functional components are simpler and faster.

### Class Component

```
class DemoComponent extends React.Component {
  render() {
    return <h1>Welcome Message!</h1>;
  }
}
```

- A class component require you to extend from React.Component and create a render function that returns a React element.
- It must have the render method returning JSX.

```
class Welcome extends React.Component {
  // this is a statefull component
  constructor(props) {
    super(props);
    this.state = {name: 'John Doe'};
  }
  render() {
    return <h1>Hello, {this.state.name}</h1>;
  }
}
```

- Also known as Stateful components because they implement logic ans state.

```
constructor(props) {
  super(props);
  this.state = {name: ' '}
}
```

- It require different syntax inside a class component to implement hooks.
- Class components are more feature-rich and reusable.

## Q3. Difference between controlled component and uncontrolled component?

| Controlled component                                                   | Uncontrolled component                                                                                                                             |
| ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| The parent component has held over the form data.                      | The DOM itself holds control over the data.                                                                                                        |
| It does not maintain its internal state.                               | It maintains its internal state.                                                                                                                   |
| It allows validation control.                                          | It does not allow validation control.                                                                                                              |
| It stores the current value in the form of props.                      | It stores the current value using react ref.                                                                                                       |
| It has better control over the form data.                              | It has limited control over the form data.                                                                                                         |
| Predictable because the component handles the form data at every step. | Not predictable because form elements can lose their reference or may be changed/ affected by external sources during the lifecycle of components. |

## Q4. What is hooks in react and what are the rule of using a hook?

- Hooks are the new feature introduced in the React 16.8 version.
- It allows you to use state and other React features without writing a class.
- Hooks are the functions which "hook into" React state and lifecycle features from function components.
- It does not work inside classes.

- There are 3 rules for hooks

### 1. Only use hooks at the top level

- This means don't use hooks inside loops, conditions or nested functions they should always be called at the top lever of your functional components.\
  <img src="https://i.ibb.co/HGxqS4D/2024-08-03-15-00-05-frontend-devlopment-React-interview-question-number-5-Is-it-useful-Let-me.png" style="width: 700px">

### 2. Only call hooks from React functions.

- Hooks should only be called from react functional components or custom hooks don't call them from regular Javascript functions.

```
export default function useMyName(name) {
  const [state, setState] = useState(value);

  useEffect(() => {
    // ...
  });

  return anyThing;
}
```

3. Don't call hooks conditionall.

- Hooks should always be called unconditionally at the top level of your component don't call them inside conditions because react relies on the order of hooks to properly manage state.\
   <img src="https://i.ibb.co/3zTCDGT/2024-08-03-15-08-17-React-interview-question-number-5-Is-it-useful-Let-me-know-in-comments-Follow.png" style="width: 400px">\
  <img src="https://i.ibb.co/MPzpCHS/2024-08-03-16-30-55-AI-Eraser.png" style="width: 700px">

| Controlled Forms                                                                                 | Uncontrolled Forms                              |
| ------------------------------------------------------------------------------------------------ | ----------------------------------------------- |
| State is mandatory to controll the form                                                          | State is optional                               |
| On time validation is possible                                                                   | On time validation is not possible              |
| Not need to DOM reference to handle the input, with event object we can handel the input values. | Need the DOM reference to get the input values. |
| State comments by the onChange handler of the inputs.                                            |                                                 |

## useRef() hook

- useRef() hook is create an object with current property, which is mutable but will not cause re-render.
  OR
- useRef() hook use to create a muteable object value which will not re-render the component.
- useRef() hook prreserves (collects) the values of an JSX element.

> import {useRef} from 'react';

#### Example

```
const myRef = useRef(initalValue);
console.log(myRef); // {current: initialValue}
```

#### Example: using to get DOM References

```
<tag ref={myRef}>Text</tag>
```

#### Example:

```
import React, { useRef } from 'react';

function UncontrolledFunction() {
  const data = useRef(0);
  console.log(data);

  const updateData = () => {
    data.current = data.current + 10;
    console.log(data);
  };

  const paraRef = useRef(null);
  const changePara = () => {
    console.log(paraRef);
    paraRef.current.innerHTML = "React is the best UI library";
  };

  return (
    <div>
      <h1>useRef() hook</h1>
      <h1>{data.current}</h1>
      <button onClick={updateData}>Change data</button>
      <p ref={paraRef}>JS is the best language</p>
      <button onClick={changePara}>Change paragraph</button>
    </div>
  );
}

export default UncontrolledFunction;
```

## React Fragments

- React Fragments are use to prevent the creation of unwanted parent HTML elements in a react application.

#### Syntax

```
<React.Fragment></React.Fragment>
OR
<></>
```

#### App.jsx

```
import React from "react";
import Child from "./Child";

const App = () => {
  return (
    <>
      <p>This is app component</p>
      <Child />
    </>
  );
};

export default App;
```

#### Child.jsx

```
import React from "react";

const Child = () => {
  return (
    <React.Fragment>
      <h1>This is child component</h1>
    </React.Fragment>
  );
};

export default Child;
```

## Conditional Rendering

- Displaying something on the UI according to some given condition is known as conditional rendering.
- In react using 3 ways we can perform conditional rendering:

1. Using Condition Statement(if, else,...)
2. Using Ternary Operator
3. Using Short Circuit Operator(logical Operators)

- We cannot write if else statements inside JSX but we can write ternary operator ans short circuit operator to handle the condition inside JSX.

#### App.jsx

```
import React from "react";
import Child from "./Child";

const App = () => {
  return (
    <>
      <Child />
    </>
  );
};

export default App;
```

#### Child.jsx

```
import React, { useState } from "react";

const Child = () => {
  const [flag, setFlag] = useState(true);
  const [number, setNumber] = useState(24);
  return (
    <>
      <h1>This is child component</h1>
      {flag ? (
        <h1>All the best for olympic gold in hockey</h1>
      ) : (
        <h1>Better luck for next time</h1>
      )}
      {number % 2 == 0 && <h1>{number} is an even number</h1>}
      {/* {number % 2 == 0 || <h1>{number} is an odd number</h1>} */}
    </>
  );
};

export default Child;
```

## Context API

<img src="https://i.ibb.co/XDbzgMj/2024-08-08-16-22-18-AI-Eraser.png" style="width: 700px">

- React context API is a way for React Application to efficiently produce global variable which can be pass to any component inside the application.
- It is very lightweight and easy to handle global states.
- Context API use to avoid props drilling inside a react application.
- Context API is a feature of react library for global state management.
- To create a context variable we have to use React.createContext() inbuild method.
- The context variable is connected to the root component with a provider function along with value attribute.

#### Creating

```
import React from 'react';

const count = React.createContext();

export default countContext
```

#### Providing (root)

```
<count.Provider value={data}>
  // All Component
</count.Provider>
```

- To use the context variable in child component we have to use a hook `useContext()`.

#### Consuming

```
import {useContext} from 'react';

const data = useContext(count)
```

## Creating a react app using vite Plugin

### Step-1

```
npm create vite@latest
```

### Step-2

give the project name `myapp`

### Step-3

Select the Framework/app `react`

### Step-4

Select the varient/script `javascript`

### Step-5

```
cd myapp
```

### Step-6

install the node_modules folder

```
npm install
```

### Step-7

run the app

```
npm run dev
```

- React Library doesn't provide any inbuilt property or method to perform page routing in a react application.
- To create routing inside a react application we have to depend on some third party libraries, `react-router-dom` is the most famous routing library for react application.
- To install

```
npm install react-router-dom
```

- The current version of `react-router-dom` is version 6.
- It provides some inbuilt components and methods to create a routing in a application.
- To use

```
import { BrowserRouter, Routes, Route } from "react-router-dom
```

#### Syntax

```
<BrowserRouter>
  <Routes>
    <Route path="/" element={</>} >
    .
    .
    .
  </Routes>
</BrowserRouter>
```

### BrowserRouter

- It is the parent of every component inside the application.

### Routes

- It is use to hold a group of routing pages, there can be multiple number of routes in one application.

### Route

- It is use to provide individual page routing for a given endpoint.
- Route component takes path and element attribute where path is use to define the endpoint of url and element attribute use to show and component in that particular path.

### Link

#### Syntax

```
<Link to="/></Link>
```

- to: String or object that specifies the pathname.
- replace: Replaces the pathname in the history stack with new.
- innerRef: Passes ref to the element rendered by the component.

### NavLink

- to, replace, innerRef same as the Link Component.
- className: Specifies the CSS class name you want to apply to the element when active.
- isActive: Returns boolean value whether the link is active or not.
- style: To apply inline CSS.
- end: Match the pathname precisely with the URL.

# Interview Question

# 1. Why we cannot use anchor tag for routing in react application?

# 2. What is the difference between link and navlink component in react-router-dom?

# 3. How to navigate from one page to another page?

# 4. What is outline component in reacter?

## Virtual DOM

<img src="https://i.ibb.co/jDt8bTG/2024-08-14-16-56-23-AI-Eraser.png" style="width: 700px">

- The DOM which is created by browsers known as Browser DOM or real DOM.
- The DOM which is manage by react DOM library known as react DOM or virtual DOM
- Virtual DOM is a lightweight copy of borwser DOM which manages every DOM manupulation inside a react application.
- Virtual DOM improves the performance of a react application.
- When a react application starts and initialize in the browser DOM the react DOM library takes a copy of the browser DOM which is known as initial virtal DOM.

## Reconciliation Process

- Reconciliation is the process where the react DOM library get synchronise with the browser DOM to update it.
- If there is any changes in states or props value react DOM library creates a new virtual DOM with the updated component tree structure, then it compares new virtual DOM with the old virtual DOM to identifying the change in the DOM trees.
- If any changes found in the new virtual DOM after the comparision process the new virtual DOM replace the old virtual DOM and browser DOM get updates with those changes.
- If there is no changes found then the react DOM library delete the new virtual DOM and does not update the browser DOM this process of comparision between two virtual DOM and updating the browser DOM is known as `Reconciliation Process`

## Diffing Algorithm

- The algorithm which is used by react DOM library to compare between two virtual DOM is called as `Diffing Algorithm`.

# Q1. What is React Fiber

## Multipage App

<img src="https://i.ibb.co/FKgRr60/2024-08-14-17-34-18-AI-Eraser.png" style="width: 700px">

## Single Page App (SPA)

<img src="https://i.ibb.co/YWT9LVQ/2024-08-14-17-37-23-AI-Eraser.png" style="width: 700px">

- The Single Page Application is a web app implementation where a web application only loads a single document and updates its body content without changing that document.
- Single Page Application are handle by the javascript api's such as ajax, httpXML request and fetch to perform the request to the server and get a json response as return.
- Single Page Application loads the content without any page refresh.
- We can create Single Page Application using javascript libraries or framework like reactjs, angularjs, vuejs and nextjs etc.

## React Lifecycle

- React Lifecycle is defined as the series of methods that are invoked in different stages of the component's existence.
- React component can go through 4 main phases as its life cycle.

1. Initialization phases
2. Mounting phases
3. Updating phases
4. Unmounting phases

<img src="https://disolutions.net/_next/static/media/blog_105.cc3faa63.webp" style="width: 700px">

### 1. Initialization phases

- The creation of variables, state, props and functions inside a component known as initialization phases.
- This is done by the constructor of a component.

### 2. Mounting phases

- In this phases the return jsx of a component are mounted in the DOM.

### 3. Updating phases

- Updatting phases occur when a components states or props are changed.

### 4. Unmounting phases

- This is last phases of a components life cycle this phases refers to the life cycle stage of a component is being removed from the DOM.

## Lifecycle Method in a Classbased Component

- All the method of lifecycle phases are predefined inside a class based component.

### 1. Mounting Phase

1. constructor()
2. static getDerivedStateFormProps()
3. render()
4. \*componentDidMount()

### 2. Updating Phase

1. static getDerivedStateFromProps()
2. shouldComponentUpdate()
3. render()
4. getSnapshotBeforeUpdate()
5. \*\*componentDidUpdate()

### 3. Unmounting Phase

1. \*\*componentWillUnmount()

### 4. Error Bounding

1. static getDerivedStateFromError()
2. componentDidCatch()

## LifeCycle Method in a Function Based Component

- There a no predefined methods to handle the lifecycle phases of a function based component.
- To achieve the lifecycle phases in a functional component we are using a hook `useEffect()`.

`import { useEffect } from 'react';`

## useEffect() hook

- `useEffect()` hook tells the component what to do after renders.
- This hook use to handle side effects in a function based component(side effects are like data fetching, using timer function, manually changing the DOM and using some UI animation etc.)
- Using `useEffect()` we can get the lifecycle phases in a function based component.
- Example:- mounting, updating, unmounting phases.

#### Syntax

```
1. useEffect(() => {
  // executes after every render
})

```

```
2. useEffect(() => { (ComponentDidMount())
  // executes For once after the inital render
}, [])
```

```
3. useEffect(() => { (componentDidUpdate())
  // executes after the dependent State/props change
}, [state, props])
```

```
4. useEffect(() => { (componentWillUnmount())
  // executes after the returned function
  return () => { (cleanup Function)
    // executes before the useEffect function
  }
})
```

## Axios

- Axios is a popular javascript API library used to perform HTTP requests to the servers from web-browser or nodejs application.
- It is a third party Promise based API library.
- Axios is light-weight & more feature oriented then the fetch API.
- Axios handle the JSON response automatically (no need of .json() method)

#### Install

```
npm i axios
```

#### Use

```
import axios from "axios"
```

#### Syntax

```
axios.method("url)

// method=> get/post/put/patch/delete ...etc
```

#### Example

```
axios.get("http://myserver.com").then(data =>
console.log(data).catch(error => console.log(error)))
```

# Q1. What is the difference between fetch and axios

### `fetch`

1. **Built-In Browser API**: `fetch` is a built-in browser API, which means you don’t need to install any additional libraries to use it. It’s available in modern browsers out of the box.

2. **Promise-Based**: `fetch` uses Promises, which allows for a more modern approach to handling asynchronous code. However, it doesn’t reject the Promise on HTTP error statuses (like 404 or 500); instead, it resolves the Promise normally, requiring additional checks for response status.

3. **No Interceptors**: `fetch` doesn’t support interceptors out of the box. If you need to modify requests or responses globally, you would need to implement custom logic or use middleware.

4. **Stream API**: `fetch` supports the Stream API, allowing you to handle response bodies as a stream. This can be useful for processing large amounts of data or handling real-time updates.

5. **Configuration Complexity**: `fetch` requires more manual configuration for tasks like setting headers, transforming requests and responses, and handling timeouts. This can lead to more verbose code compared to some libraries.

### `axios`

1. **Third-Party Library**: `axios` is a third-party library that needs to be installed separately. It’s not built into the browser but can be used in both browser and Node.js environments.

2. **Promise-Based with Error Handling**: `axios` also uses Promises but will reject them for HTTP error statuses (like 404 or 500), making error handling simpler. You can catch errors more straightforwardly using `.catch()`.

3. **Interceptors**: `axios` supports request and response interceptors, allowing you to modify requests or responses before they are handled by `.then()` or `.catch()`. This is useful for adding authentication tokens or logging.

4. **Automatic JSON Data Transformation**: `axios` automatically transforms JSON data into JavaScript objects and vice versa, which can simplify working with APIs that use JSON.

5. **Convenient Defaults**: `axios` provides default settings and allows you to configure global settings, such as base URLs, headers, and timeouts. This can reduce the amount of configuration needed in individual requests.

## useReducer() hook

- `useReducer()` hook is similar to `useState()` hook used for managing a state in a function based component.
- `useReducer()` hook use to manage complex state changing logic in a component.
- Instead of providing a set state function like `useState()` hook `useReducer()` hook take a custom state changing function logic to handle the state updation.

#### Syntax

```
import { useReducer } from 'react';

const [state, dispatch] = useReducer(reducer, initailValue, initialfunction);

// state => inital value
// dispatch => function to update the state by providing the action object
// reducer => custom state changing function Ref
// initialValue => the inital value of the state
// initialfunction => optional(used to lazily load the state)
```

- `useReduder()` hook takes three argument:

1. reducer function
2. inital value for the state
3. initialization function (optional)

### reducer function

- It returns an array of two elements:

1. state value
2. dispatch function

- which use to invoke the reducer function with a action argument.
- Reducer function is a pure function which always returns a updated state according to the user action.
- Reducer function has two parameter state and action, state refers to the initial value and action accept an object with type and payload properties.

## useMemo()

#### Syntax

```
import {useMemo} from 'react';
```

#### use

```
let result = useMemo(() => {
  // Statement
  return value
}, [state/props])

// return => Memoized Value (the returned value)
// [state/props] => dependencies
```

## useCallback()

#### Syntax

```
import {useCallback} from "react"
```

#### use

```
let result = useCallback(() => {
  // Statement
}, [state/props])

// return => Memoized function (the reference of Callback function)
// [state/props] => dependencies
```

- `useMemo()` and `useCallback()` hooks are used as a browser optimization tools.
- Both hooks are used for preventing unnecessary operation, calculation and function calling inside a react function based component.
- These hooks are taking 2 argument:

  1. callback function
  2. dependencies array of a state or props value.

- The callback function execute whenever any of the dependencies changed.
- `useMemo()` hook return a memoized value while `useCallback()` hook return a memoized function.
- `useMemo()` prevents unnecessary value calculation in each render and `useCallback()` prevents unnecessary function creation in each render of a component.

# Q1. What is the difference between useMemo() and useCallback() hook

# Q2. How these hook are different from useEffect hook

## React Higher Order Component

- In React, a higher-order component is a function that takes a component as an argument and returns a new component that wraps the original component.
- Higher order component allows us to add additional functionality to a component without modifying the components JSX.
- Higher order component are used for re-use a components code multiple times across the react application.
- HOC are mostly use for authentication or routing capabilites to a component or to apply a specific style or behaviour to mutliple components.

# Redux

<img src="https://i.ibb.co/ncgMVg5/2024-08-29-16-33-01-AI-Eraser.png" style="width: 700px">\
<img src="https://i.ibb.co/4JLvYCF/2024-08-29-16-44-34-AI-Eraser.png" style="width: 700px">\
<img src="https://redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif" style="width: 700px">

- Redux is a javascript open source library use to manage a global state in javascript application.
- Redux is a third party global state management library which solves the problem of prop drilling by efficiently passing a global state to the components of a react application.
- It is very usefull for large application where we have to manage bigger data and complex state change logics.
- To use the redux in a react application we have to use another library react-redux.

#### Installation

```
npm install redux
npm install react-redux
```

```
npm i redux react-redux
```

- Redux file have three primary component
  1. action
  2. reducer
  3. store

### Action

- Action is a plain javascript object with type and payload properties which defines the actions or events occur in the react application.
- Type property use for declaring the type of event and payload property use to get some information or data in that particular event.

### Reducer

- A reducer is a pure fuction which always returns the updated state according to the action type.
- A reducer function has 2 parameters:
  1. state
  2. action
  - State receive the initalvalue and action object describes how to update the state.

### Store

- Store is the place where every global state of the application stores.
- Store is like a brain of our application which responsible for every changes for the state of the application.
- To create a store we are using a predefined function `legacy-create-store` from redux library.
- Store is connected to the root component of the react application by provider function from `react-redux` library.

```
import { Provider } from "react-redux"
```

#### Syntax

```
<Provider store={Ref of Store}>
  // all Component
</Provider>
```

- To use a redux state inside a component we a using `useSelector()` hook and to modify a state we use `useDispatch()` hook from `react-redux` library.

```
import { useSelector, useDispatch } from "react-redux"
```

#### Syntax

```
const state = useSelector((store) => store.reducer)
const dispatch = useDispatch()
dispatch(Action)
```