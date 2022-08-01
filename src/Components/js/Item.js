const Item = ({ id, note, date, time, deleteData, submittingStatus }) => {
    
  function deleteItem() {
    submittingStatus.current = true
    deleteData(function (prev) {
      return prev.filter((item) => item.id !== id);
    });
  }

  return (
    <div className="item">
      <div>
        <p  style={{color: "black"}}>{note}</p>
        <p  style={{color: "black"}}>{`${date} ${time}`}</p>
      </div>
      <button onClick={deleteItem} className="remove">
        Delete
      </button>
    </div>
  );
};

export default Item;
