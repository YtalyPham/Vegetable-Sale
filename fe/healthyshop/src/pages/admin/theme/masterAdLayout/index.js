import { memo } from "react";
import Footer from "../../../users/theme/footer";
import { ROUTERS } from "../../../../utils/router";
import { useLocation } from "react-router-dom";

const MasterAdLayout = ({ children, ...props }) => {
  const location = useLocation();
  const isLoginPage = location.pathname.startsWith(ROUTERS.ADMIN.LOGIN);

  return (
    <div {...props}>
      {children}
      {!isLoginPage && <Footer />}
    </div>
  );
};

export default memo(MasterAdLayout);
