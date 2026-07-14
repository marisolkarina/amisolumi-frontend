import { Outlet } from "react-router";
import { AdminPage } from "../../features/admin/pages/admin";

export function Admin() {
    return(
        <div>
            <AdminPage/>
            <Outlet/>
        </div>
    );
}