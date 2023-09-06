import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from "./components/main/Header";
import Home from "./components/main/Home";
import {Provider} from "react-redux";
import store from './store/store'
import FoodList from "./components/food/FoodList";
import FoodDetail from "./components/food/FoodDetail";
import News from "./components/news/News";
// :cno >> cno값 넘기는거
//"/food/food_list/:cno" 이 주소가 들어오면 FoodList 실행
// "/food/food_list/:cno/:xx" >> 값 두개 넘길때
function App() {
  return (
      <Provider store={store}>
      <Router>
        <Header/>
        <div className={"container"}>
          <Routes>
            <Route exact path={"/"} element={<Home/>}/>
               <Route path={"/food/food_list/:cno"} element={<FoodList/>}/>
              <Route path={"/food/food_detail/:fno"} element={<FoodDetail/>}/>
              <Route path={"/news/news_find"} element={<News/>}/>
          </Routes>
        </div>
      </Router>
      </Provider>
  );
}

export default App;
