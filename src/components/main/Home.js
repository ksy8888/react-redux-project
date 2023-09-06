import {Fragment,useState,useEffect} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";
import {FETCH_CATEGORY} from "../../actions/types";
import {fetchCategory} from "../../actions/foodActions";
import {useDispatch,useSelector} from "react-redux";

function Home() {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchCategory(1))
        },[])
    const changeCategory=(no)=>{
        if(no===1) {
            dispatch(fetchCategory(1))
        } else if(no===2) {
            dispatch(fetchCategory(2))
        } else {
            dispatch(fetchCategory(3))
        }
    }

    //데이터 받기
    //foodReducer의 const initialState={
    /* category:[],
       cate_food:[],  //FETCH_CATE_LIST
       food_detail:{},
       cate_info:{}*/
    const category = useSelector((state)=> state.foods.category)
    const html=category.map((c,key)=>

        <div className="col-md-4" key={c.cno}>
            <div className="thumbnail">
                <NavLink to={"/food/food_list/"+c.cno}>   {/*App.js의 명과 일치*/}
                    <img src={c.poster} alt="Lights" style={{"width":"100%"}}/>
                    <div className="caption">
                        <p>{c.title}</p>
                    </div>
                </NavLink>
            </div>
        </div>
    )
    /*
     JSX = JavaScript+XML
     React.createElement('row',Reavt.createElement('input',''))
     */
    return(
        <Fragment>
            <div className={"row"}>
                <div className={"text-center"}>
                    <input type={"button"} className={"btn btn-sm btn-danger"} value={"믿고보는 맛집 리스트"} onClick={()=>changeCategory(1)}/>
                    <input type={"button"} className={"btn btn-sm btn-info"} value={"지역별 맛집 리스트"} onClick={()=>changeCategory(2)}/>
                    <input type={"button"} className={"btn btn-sm btn-success"} value={"메뉴별 맛집 리스트"} onClick={()=>changeCategory(3)}/>
                </div>
            </div>
            <div style={{"height":"20px"}}></div>
            <div className={"row"}>
                {html}
            </div>
        </Fragment>
    )
}
export default Home