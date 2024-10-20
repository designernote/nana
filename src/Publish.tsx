import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { CartList } from "./publish/CartList";
import { CartMain } from "./publish/CartMain";
import { CartInfo } from "./publish/CartInfo";
import { CartListDetail } from "./publish/CartListDetail";
import { GiftRecommList } from "./publish/GiftRecommList";
import { GiftRecommDetail } from "./publish/GiftRecommDetail";
import { Mypage1 } from "./publish/Mypage1";
import { Mypage2 } from "./publish/Mypage2";
import { FriendList } from "./publish/FriendList";
import { FriendInfo } from "./publish/FriendInfo";
import { Question1 } from "./publish/Question1/Question1";
import { Question2 } from "./publish/Question2/Question2";
import { Question3 } from "./publish/Question3/Question3";

function Publish() {
  return (
    <Router>
      <div className="flex justify-between w-full h-full">
        <nav>
          <ul>
            <li>
              <Link to="/publish/CartList">CartList</Link>
            </li>
            <li>
              <Link to="/publish/CartMain">CartMain</Link>
            </li>
            <li>
              <Link to="/publish/CartInfo">CartInfo</Link>
            </li>
            <li>
              <Link to="/publish/CartListDetail">CartListDetail</Link>
            </li>
            <li>
              <Link to="/publish/GiftRecommList">GiftRecommList</Link>
            </li>
            <li>
              <Link to="/publish/GiftRecommDetail">GiftRecommDetail</Link>
            </li>
            <li>
              <Link to="/publish/Mypage1">Mypage1</Link>
            </li>
            <li>
              <Link to="/publish/Mypage2">Mypage2</Link>
            </li>
            <li>
              <Link to="/publish/FriendList">FriendList</Link>
            </li>
            <li>
              <Link to="/publish/FriendInfo">FriendInfo</Link>
            </li>
            <li>
              <Link to="/publish/Question1">Question1</Link>
            </li>
            <li>
              <Link to="/publish/Question2">Question2</Link>
            </li>
            <li>
              <Link to="/publish/Question3">Question3</Link>
            </li>
          </ul>
        </nav>

        <div className="flex-1">
          <Switch>
            <Route path="/publish/CartList" component={CartList}></Route>
            <Route path="/publish/CartMain" component={CartMain}></Route>
            <Route path="/publish/CartInfo" component={CartInfo}></Route>

            <Route
              path="/publish/CartListDetail"
              component={CartListDetail}
            ></Route>
            <Route
              path="/publish/GiftRecommList"
              component={GiftRecommList}
            ></Route>
            <Route
              path="/publish/GiftRecommDetail"
              component={GiftRecommDetail}
            ></Route>
            <Route path="/publish/Mypage1" component={Mypage1}></Route>
            <Route path="/publish/Mypage2" component={Mypage2}></Route>
            <Route path="/publish/FriendList" component={FriendList}></Route>
            <Route path="/publish/FriendInfo" component={FriendInfo}></Route>
            <Route path="/publish/Question1" component={Question1}></Route>
            <Route path="/publish/Question2" component={Question2}></Route>
            <Route path="/publish/Question3" component={Question3}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default Publish;
