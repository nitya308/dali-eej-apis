export default function ShoppingListItem(props) {
  //   props = {name: "Bananas", note: "5 of them"}
  //   props.name, props.note
  // props.deleteItemFunction()
  function deleteItem() {
    props.deleteItemFunction(props.id)
  }

  let donePressed = true;

  return (
    <div className={donePressed ? 'pink-box': 'done-box pink-box'}>
      <h1>{props.name}</h1>
      <p>{props.note}</p>
      <div className="button-container">
        <button>Mark as done</button>
        <button onClick={deleteItem}>Delete</button>
      </div>
    </div>
  );
}


// if donePressed then do x otherwise y
// donePressed? x : y