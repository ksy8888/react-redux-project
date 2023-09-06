import {Fragment,useEffect,useState} from "react";
import axios from "axios";
import {fetchNews} from "../../actions/foodActions";
import {useSelector,useDispatch} from "react-redux";

function News() {
    /*const  [newsList,setNewsList] = useState([])
    const [fd,setFd] = useState('맛집')*/
    const dispatch=useDispatch()                       //
    const [fd,setFd] = useState('마포')
    useEffect(() => {
        dispatch(fetchNews(fd))
    }, []);
    const findBtn=()=>{
        dispatch(fetchNews(fd))
    }
    const newsChange=(e)=>{
        setFd(e.target.value)
    }
    const newsList = useSelector((state)=> state.foods.news_data)    //
    let html = newsList.map((news)=>
    <table className={"table"}>
        <tbody>
        <tr>
            <td>
                <a href={news.link} target={"_blank"}><h3 style={{"color":"orange"}} dangerouslySetInnerHTML={{__html:news.title}}></h3></a>
            </td>
        </tr>
        <tr>
            <td dangerouslySetInnerHTML={{__html:news.desc}}></td>
        </tr>
        <tr>
            <td className={"text-right"}>{news.pubdate}</td>
        </tr>
        </tbody>
    </table>
    )
    return (
        <Fragment>
        <div className={"row"}>
            <table className={"table"}>
                <tr>
                    <td>
                        <input type={"text"} className={"input-sm"} size={"25"} onChange={newsChange}/>
                        <input type={"button"} className={"btn btn-sm btn-primary"} value={"검색"} onClick={findBtn}/>
                    </td>
                </tr>
            </table>
        </div>
        <div style={{"height":"10px"}}></div>
        <div className={"row"}>
            <table className={"table"}>
                <tr>
                    <td>
                        {html}
                    </td>
                </tr>
            </table>
        </div>
        </Fragment>
    )
}

export default News