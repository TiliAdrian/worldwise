import Map from "../components/Map";
import SideBar from "../components/SideBar";
import User from "../components/User";
import styles from "./AppLayout.module.css";
import ProtectedRoute from "./ProtectedRoute";

function AppLayout() {
  return (
    <div className={styles.app}>
      <ProtectedRoute>
        <SideBar></SideBar>
        <Map></Map>
        <User></User>
      </ProtectedRoute>
    </div>
  );
}

export default AppLayout;
