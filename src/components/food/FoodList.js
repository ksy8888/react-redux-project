import {useParams} from "react-router";
import {useState,useEffect,Fragment} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
//import java.util.Scanner,List
import {FETCH_CATE_INFO,FETCH_CATE_LIST} from "../../actions/types";
import {fetchCategoryFoodList,fetchCategoryInfoList} from "../../actions/foodActions";

function FoodList(){
    const  {cno}=useParams()
   // const [cateInfo,setCateInfo] = useState({}) //Vo,Entity   //useState는 이 파일에서만 사용가능
   // const [foodList,setFoodList] = useState([])  //List       //state는 store에 저장시켜뒀기 때문에 필요없음

    //action을 연결할 땐 dispatch
    const dispatch=useDispatch()
    useEffect(() => {
       dispatch(fetchCategoryFoodList(cno))
        dispatch(fetchCategoryInfoList(cno))
    }, [])

    const foodList = useSelector((state)=>state.foods.cate_food)
    const cateInfo = useSelector((state)=>state.foods.cate_info)


    const html=foodList.map((food,key)=>
         <table className={"table"} key={food.fno}>
             <tbody>
              <tr>
                  <td width={"30%"} className={"text-center"} rowSpan={"4"}>
                      <NavLink to={"/food/food_detail/"+food.fno}>
                      <img src={food.poster} style={{"width":"100%"}}/>
                      </NavLink>
                  </td>
                  <td width={"70%"}>
                      <h3> <NavLink to={"/food/food_detail/"+food.fno}>{food.name}</NavLink>&nbsp;<span style={{"color":"orange"}}>{food.score}</span></h3>
                  </td>
              </tr>
             <tr>
                 <td width={"70%"}>{food.address}</td>
             </tr>
              <tr>
                  <td width={"70%"}>{food.phone}</td>
              </tr>
              <tr>
                  <td width={"70%"}>{food.type}</td>
              </tr>
             </tbody>
         </table>

    )
    return (

       <Fragment>
           <div className={"jumbotron"}>
               <h3 className={"text-center"}>{cateInfo.title}</h3>
               <h4 className={"text-center"}>{cateInfo.subject}</h4>
           </div>

           <div className={"row"}>
               <table className={"table"}>
                   <tbody>
                   <tr>
                       <td>
                           {html}
                       </td>
                   </tr>
                   </tbody>
               </table>
           </div>
       </Fragment>
    )
}
export default FoodList