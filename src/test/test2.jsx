import axios from "axios";
import { useState } from "react";

function test2 () {

    const [test1, setTest1] = useState([]);
    const [test2, setTest2] = useState([]);
    const [test3, setTest3] = useState([]);

    const userFoodList = () => {
        axios.get('/dummy/testFile.json')
        .then((res) => {
            setTest1(res.data.foodList);
        })
        .catch(error => {
           
            console.error(error);
        });
    } 

    const foodCOA = () => {
        axios.get('/dummy/testFile.json')
        .then((res) => {
            setTest2(res.data.foodCOA);
        })
        .catch((err) => {
            console.error(err);
        });
    } 

    const foodPrice = () => {
        axios.get('/dummy/testFile.json')
        .then((res) => {
            setTest3(res.data.foodPrice);
        })
        .catch((err) => {
            console.error(err);
        });
    } 

    const getData = () => {
        userFoodList();
        foodCOA();
        foodPrice();
    }
    getData();


    return(
        <div>
            <h2>먹고간 음식 및 원산지, 가격 표시</h2>
            <div>
                <span>먹은 음식 : </span>
                {
                    test1.map((list) => (
                        <span>{list.name} </span>
                    ))
                }
            </div>
            <div>
                <span>원산지 : </span>
                {
                    test2.map((coa) => (
                        <span>{coa.coa}</span>
                    ))
                }
            </div>
            <div>
                <span>가격 표시 : </span>
                {
                    test3.map((price) => (
                        <span>{price.price} </span>
                    ))
                }
            </div>
        </div>
    );
}

export default test2;