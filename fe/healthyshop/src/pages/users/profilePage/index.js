import { memo } from "react";
import "./style.scss";
import c1 from "../../../assets/users/images/categories/c1.jpg"
const ProfilePage = () =>{
    return <>
        <div
              className="container_profile"
              style={{ backgroundImage: `url(${c1})` }}
            >
              <p>Xin chào</p>
        </div>
    </>;
           
};

export default memo(ProfilePage);