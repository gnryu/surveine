import React, {useEffect, useState} from "react";
import Component from "./Component";
import srcCoffeebean from "../image/addCoffeebean.png";

function CoffeBeenList(ref){
    //검색해야하는 변수
    const [searchValue, setSearchValue] = useState('');
    const [data, setData] = useState([]);

    const searchChange = (event) => { //search안에 들어가 있는 value를 바꿈
        setSearchValue(event.target.value);
    };

    const clickSearch = () => {
        //검색을 클릭했을 때 실행되야할 기능 구현
        alert("검색 클릭");
    }

    const clickAddCofeebean = () =>{
        //이미지를 클릭했을 때 설문조사를 제작하는 페이지로 이동
        alert("제작 클릭");
    }

    useEffect(() => {
        // 데이터베이스에서 데이터를 가져오는 API 요청
        setData([ //이건 예시
            {id: 1, title: "example1", content: "This is example data 1"},
            {id: 2, title: "example2", content: "This is example data 2"},
            {id: 3, title: "example1", content: "This is example data 1"},
            {id: 4, title: "example1", content: "This is example data 1"},
            {id: 5, title: "example1", content: "This is example data 1"},
            {id: 6, title: "example1", content: "This is example data 1"},
            {id: 7, title: "example1", content: "This is example data 1"},
            {id: 8, title: "example1", content: "This is example data 1"},
            {id: 9, title: "example1", content: "This is example data 1"},
            {id: 10, title: "example1", content: "This is example data 1"},
            {id: 11, title: "example1", content: "This is example data 1"},
            {id: 12, title: "example1", content: "This is example data 1"},
            {id: 13, title: "example1", content: "This is example data 1"},
            {id: 14, title: "example1", content: "This is example data 1"},
            {id: 15, title: "example1", content: "This is example data 1"},
            {id: 16, title: "example1", content: "This is example data 1"},
            {id: 17, title: "example1", content: "This is example data 1"},
            {id: 18, title: "example1", content: "This is example data 1"},
            {id: 19, title: "example1", content: "This is example data 1"},
            {id: 20, title: "example1", content: "This is example data 1"},
            {id: 21, title: "example1", content: "This is example data 1"}

        ]);
      }, []);

    return(
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '16px', paddingRight: '16px'}}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span style={{ alignSelf: 'flex-start' }}>제작함</span>
                <span style={{ alignSelf: 'flex-start' }}>기본 제작함</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                    <input type="text" placeholder="Search" value={searchValue} onChange={searchChange}></input>
                    <button onClick={clickSearch}>검색</button>
                </div>
            </div>
            <p/>
            

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                {data.map(item => (
                    <div key={item.id} style={{width: '238px', height: '179px', margin: '8px', backgroundColor: 'lightgray'}}>
                        <Component title={item.title} content={item.content} />
                    </div>
                ))}
                <div style={{width: '238px', height: '179px', margin: '8px'}}>
                    <img src={srcCoffeebean} alt="Add Coffee Bean" onClick={clickAddCofeebean} style={{ width: '30px', height: '30px', paddingTop:"88px", paddingLeft:"20px" }} />
                </div>
            </div>
        </div>

    );
}

export default CoffeBeenList;