import { useState } from "react";
import styled from "styled-components";
import { ButtonWrap } from "./UI/Button/button";
import { InputField } from "./UI/Input/input";
import { Title } from "./UI/Title/title";
import { data } from '../utils/constants'

export const Content = () => {
    const [value, setValue]= useState('');
    const [result, setResult] = useState('');

    const handleChangeValue = (e)=>{
      let getValue = e.target.value;
      setValue(getValue)
    }

    const handleGetResult =()=>{
        let searchValue = data.find(elem=>elem.course.toLowerCase() === value.toLowerCase());
        setResult(searchValue)
    }
	return (
        <>
		<ContentWrap>
			<Title>Search Bar</Title>
			<InputField onChange={handleChangeValue}/>
			<ButtonWrap onClick={handleGetResult}>Search</ButtonWrap>
            {result ? <Result>{result.course}</Result>: <p>No such course</p>}
        </ContentWrap>
        </>
	);
};

const ContentWrap = styled.div`
	margin: 0 auto;
	width: 500px;
	height: 300px;
	background: lightblue;
	padding: 24px;
    border-radius: 6px;
`;

const Result = styled.p`
    padding-top: 15px;
    font-size: 18px;
`