import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
import { useTodoDispatch } from './TodoReducer';

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer; // 휴지통 아이콘에 마우스 올리면 포인트 커서로 나타남
  &:hover { // 휴지통 아이콘에 마우스 커서 올리면 색상이 #ff6b6b로 변함.
    color: #ff6b6b;
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex; // flex를 사용해서 체크표시와 텍스트 부분을 inline으로 나타나게 해줌. 
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover { // 텍스트 부분에 마우스 올릴시 휴지통 아이콘 나타나게 함.
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center; // 체크 표시 클릭시 원안에 체크표시가 가운데에 나타나게 함
  justify-content: center; // 체크 표시 클릭시 원안에 체크표시가 가운데에 나타나게 함
  margin-right: 20px; // 체크표시와 텍스트 사이 거리를 나타냄
  cursor: pointer; // 체크표시 하는 부분에 마우스를 올리면 포인터 커서로 나타나게함 
  ${props => // 체크표시를 클릭하면 true로 나타나게 되며 true시 색상이 #38d9a9로 나타나게함.
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${props => // true시 글씨 색상이 검은색에서 #ced4da이부분으로 변함.
    props.done &&
    css`
      color: #ced4da;
    `}
`;


function ContentItem ({ id, done, text }) {

    // Mold -> 가운데 흰색 부분
    // Mold의 내용부분의 내용을 보여주는 곳 

    const dispatch = useTodoDispatch(); //dispatch를 사용해서 토글기능과 삭제기능을 구현했습니다.

    const onToggle = () => {
      dispatch({type: 'TOGGLE', id});
    }
    const onRemove = () => {
      dispatch({type: 'REMOVE', id});
    }

    return(
        <TodoItemBlock>
            <CheckCircle done={done} onClick={onToggle}>{done && <MdDone />}</CheckCircle>
            <Text done={done}>{text}</Text>
            <Remove onClick={onRemove}>
                <MdDelete />
            </Remove>
        </TodoItemBlock>
    );
}

export default React.memo(ContentItem);