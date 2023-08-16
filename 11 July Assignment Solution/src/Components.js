function Person (props) {
    return (
    <>
    <p>Person's name is {props.name} and age is {props.age}</p>
    </>

    )
}
function Button(props){

    return (
        <>
        <button onClick={props.onClick}>
            {props.text}
        </button>
        <h3 id="btn"></h3>
        </>
    )
}

function Header(props){
    return (
        <h1>{props.title}</h1>
    )
}

function List (props){
    return (
          <ul>
            {
            props.items.map((item, index) => (
            <li key={index}>{item}</li>
      ))
      }
           </ul>
    )
}
export { 
    Person,
    Button,
    Header,
    List
}