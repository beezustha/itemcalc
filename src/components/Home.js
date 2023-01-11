import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";

const Home = () => {
    const [items, setItems] = useState([{ id: 0, title: "", price: "" }]);
    const [activeProduct, setActiveProduct] = useState(1);
    console.log(activeProduct, "activeProduct");
    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3003/products");
        setItems(result.data);
    };
    useEffect(() => {
        loadUsers();
    }, []);

    return (
        <div className="header">
            <h2>Item Calculator</h2>

            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputCity">Products</label>
                    <select
                        id="inputState"
                        class="form-control"
                        onChange={(e) => {
                            setActiveProduct(parseInt(e.target.value));
                        }}
                    >
                        {items?.map((item, id) => {
                            return <option value={id}>{item.title}</option>;
                        })}
                    </select>
                </div>
                <div class="form-group col-md-4">
                    <label for="inputState">Price</label>
                    {items
                        ?.filter((item) => item.id === activeProduct)
                        .map((item, id) => {
                            return <p key={id}> {item.price}</p>;
                        })}
                </div>
                <div class="form-group col-md-2">
                    <label for="inputZip">Total</label>
                    <input
                        type="text"
                        class="form-control"
                        id="inputZip"
                    ></input>
                </div>
            </div>
        </div>
    );
};

export default Home;
