import { useState } from "react";
import { useDispatch } from "react-redux";

function Form() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState(0);
  const [amount, setAmount] = useState(0);
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <input
            type="text"
            placeholder="enter the name"
            value={name}
            onChange={(e) => {
              let data = e.target.value;
              setName(data);
            }}
          />
        </div>
        <button
          className="btn btn-primary col-2"
          onClick={() => {
            dispatch({ type: "updateName", payload: name });
          }}
        >
          update
        </button>
        <div className="row">
          <div className="col-3">
            <input
              type="number"
              placeholder="mobile number"
              value={mobileNumber}
              onChange={(e) => {
                let data = e.target.value;
                setMobileNumber(data);
              }}
            />
          </div>

          <button
            className="btn btn-primary col-2 m-2"
            onClick={() => {
              dispatch({ type: "updateNumber", payload: mobileNumber });
            }}
          >
            update
          </button>
        </div>
        <div className="row">
          <div className="col-3">
            <input type="number " placeholder="amount" value={amount} onChange={(e)=>{let data=e.target.value;
              setAmount(data);
            }}/>
          </div>
          <button className="btn btn-primary col-2 m-2" onClick={()=>{dispatch({type:"deposit",payload:amount})}}>Deposit</button>
          <button className="btn btn-primary col-2 m-2" onClick={()=>{dispatch({type:"withdraw",payload:amount})}}>Withdraw</button>
        </div>
      </div>
    </div>
  );
}

export default Form;
