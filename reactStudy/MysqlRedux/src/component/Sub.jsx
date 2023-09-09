import { Link } from 'react-router-dom';

function Sub() {
    return (
      <div>
        <h3>서브입니다.</h3>
          <ul>
            <Link to="/product/1"><li>1번상품</li></Link>
            <Link to="/product/2"><li>2번상품</li></Link>
          </ul>
      </div>
    );
  }
  
  export default Sub;