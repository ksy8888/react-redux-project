import {FETCH_CATE_LIST,FETCH_FOOD_DETAIL,FETCH_FOOD_LOCATION,FETCH_NEWS,FETCH_CATE_INFO,FETCH_CATEGORY} from "../actions/types";

//데이터를 저장 => useState
//useSelector((state)=>cate_food)
const initialState={
    category:[],
    cate_food:[],  //FETCH_CATE_LIST
    food_detail:{},
    cate_info:{},
    page_info:{},
    food_data:[],
    news_data:[]
}
/*
    react = JSP
    store = DispatcherServlet
    action = @RequestMapping(types) , DAO
    reducer = Model(데이터 관리)
    request = state
    JSP => DispatcherServlet => @RequestMapping => DAO => request
    React => store => action => reducer => state
    React => 이벤트 발생 => action({type,payload}) => reducer -> store
      => reducer에서 state갱신 => re-rendering => 화면 변경 가능
    
    const 객체는 처음 선언한 값 그대로를 프로그램 실행 내내 변함없이 가지고 있을 것
    
 */
export default function (state=initialState,action) {
    console.log("reducer function call...action(전송된 값)")
    switch (action.type){
        case FETCH_CATEGORY:
            return {
                ...state, //이전의  state를 유지했다가
                category: action.payload //값을 변경
            }
        case FETCH_CATE_LIST:
            return {
                ...state,
                cate_food: action.payload
                
            }
        case FETCH_CATE_INFO:
            return {
                ...state,
                cate_info: action.payload
            }
        case FETCH_FOOD_DETAIL:
            return {
                ...state,
                food_detail: action.payload
            }
        case FETCH_NEWS:
            return {
                ...state,
                news_data: action.payload
            }
        default:
            return state;
    }
}