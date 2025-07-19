const parent = React.createElement("div" ,{id:"parent"},[
    React.createElement("div",{id:"child1"},[
        React.createElement("h1" ,{} , "I am div Heading"),
        React.createElement("h2" ,{} , "I am div Heading"),
]),
   React.createElement("div",{id:"child2"},[
        React.createElement("h1" ,{} , "I am div Heading"),
        React.createElement("h2" ,{} , "I am div Heading"),
]),
]);


// const heading = React.createElement("h1" ,{} , "Heloo from react")
    const root = ReactDOM.createRoot(document.getElementById("root"))
    root.render(parent)