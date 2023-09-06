import {Fragment} from "react";
import {NavLink,useNavigate} from "react-router-dom";
import {useEffect,useState} from "react";
import {useParams} from "react-router";
import axios from "axios";
import {fetchFoodDetail} from "../../actions/foodActions";
import {useSelector,useDispatch} from "react-redux";

function FoodDetail() {
    //전송된 데이터 받기
    const {fno} = useParams();
    const nav=useNavigate();
    /*const [foodDetail, setFoodDetail] = useState({})*/
    //연결
    const dispatch = useDispatch()
    useEffect(()=>{
         dispatch(fetchFoodDetail(fno)) //데이터 받음    //actiond에서 호출하고 
    },{})
    //값변경
    const foodDetail = useSelector((state)=>state.foods.food_detail) //state에서 값받아옴
    
    
    let poster = String(foodDetail.poster)
    const img = poster.split("^")
    const html = img.map((m)=>
    <td><img src={m} style={{"width":"100%"}}/></td>
    )
    return(
        <div className={"row"}>
            <table className={"table"}>
                <tbody>
                 <tr>
                     {html}
                 </tr>
                </tbody>
            </table>
            <div style={{"height":"10px"}}></div>
            <table className={"table"}>
                <tbody>
                <tr>
                    <td colSpan={"2"}>
                        <h3>{foodDetail.name}&nbsp;<span style={{"color":"orange"}}>{foodDetail.score}</span></h3>
                    </td>
                </tr>
                <tr>
                    <th width={"15%"}>주소</th>
                    <td width={"85%"}>{foodDetail.address}</td>
                </tr>
                <tr>
                    <th width={"15%"}>전화</th>
                    <td width={"85%"}>{foodDetail.phone}</td>
                </tr>
                <tr>
                    <th width={"15%"}>음식종류</th>
                    <td width={"85%"}>{foodDetail.type}</td>
                </tr>
                <tr>
                    <th width={"15%"}>가격대</th>
                    <td width={"85%"}>{foodDetail.price}</td>
                </tr>
                <tr>
                    <th width={"15%"}>영업시간</th>
                    <td width={"85%"}>{foodDetail.time}</td>
                </tr>
                <tr>
                    <th width={"15%"}>주차</th>
                    <td width={"85%"}>{foodDetail.parking}</td>
                </tr>
                <tr>
                    <td className={"text-right"} colSpan={"2"}>

                        <button onClick={()=>nav(-1)}className={"btn btn-sm btn-primary"}>목록</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}
export default FoodDetail