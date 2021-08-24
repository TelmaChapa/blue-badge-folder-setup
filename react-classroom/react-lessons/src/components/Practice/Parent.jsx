import Child from "./Child";
const Parent = (props) => {
    let name = "Telma";
    let city = "Indy";
  return (
    <div>
      <p>Hello from Parent!</p>
      <Child name={name} city={city} summerActivity={props.summerActivity} />
    </div>
  );
};

export default Parent;
