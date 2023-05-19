import React, { useEffect, useState } from "react";

import {BroserRouter as Router,Link} from  "react-router-dom";

export default function Reuseform() {
  let [data, setData] = useState([]);
  let [list, setList] = useState([]);
  let [to, setTo] = useState([]);
  let [name, setName] = useState("");
  let [check, setCheck] = useState("");
  let [surname, setSurname] = useState("");
  let [open, setOpen] = useState(true);
  let nonrepeat = [];
  let clicked = [];

  useEffect(() => {
    const apicalling = async () => {
      try {
        let url = "https://date.nager.at/api/v3/publicholidays/2023/AT";
        const response = await fetch(url);
        const resjson = await response.json();

        setData(resjson);
      } catch (error) {
        console.log(error);
      }
    };
    apicalling();
  }, []);

  const submit = (e) => {
    e.preventDefault();
   

    if (name !== "" && surname !== "") {
      setOpen(false);
    }
  };

  const selectdata = (element) => {
    setList([...list, element]);
    console.log(list);

    list.forEach((el, i) => {
      if (!nonrepeat.includes(el)) {
        nonrepeat.push(el);
        setCheck("");
      } else if (list.indexOf(el) !== i) {
        setCheck("alredy exist");
      } else {
        console.log("f");
      }
    });
    console.log(nonrepeat);
    setTo(nonrepeat);
  };

  return (
    <div>
      {open ? (
        <div className="d-flex justify-content-center">
          <h4 className="please">Please fill this form</h4>
          <div className="col-lg-6 formdiv">
            <form>
              <div className="form-group row mt-3">
                <label for="inputEmail3" className="col-sm-2 col-form-label">
                  Name
                </label>
                <div className="col-sm-10">
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail3"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></input>
                </div>
              </div>
              <div className="form-group row mt-3">
                <label for="inputPassword3" class="col-sm-2 col-form-label">
                  Surname
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputPassword3"
                    placeholder="Surname"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                  ></input>
                </div>
              </div>
              <div className="form-group row">
                <div className="d-flex justify-content-center mt-3">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={(e) => submit(e)}
                  >
                    Sign in
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center mt-3">
          <div className="col-lg-8">
            <div>
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Date</th>
                    <th scope="col">localName</th>
                    <th scope="col">Name</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((element, id) => {
                    return (
                      <>
                        <tr key={id}>
                          <td onClick={() => selectdata(element.name)}>
                            {element.date}
                          </td>
                          <td>{element.localName}</td>
                          <td>{element.name}</td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div>
              {to.map((el,id) => {
                return (
                  <>
                    <li key={id}>{el}</li>
                  </>
                );
              })}
              <p>{check}</p>
            </div>
            <div>
           
               <button>
                <Link to="/Googlesearch">Next Page</Link>
             </button>    
            </div>
          </div>
        </div>
        
      )}
     
    </div>
  );
}
