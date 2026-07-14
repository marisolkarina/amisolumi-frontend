import { Outlet } from "react-router";
import { Navbar } from "../components/navbar/navbar";

export function AmisolumiLayout() {
    return(
        <div>
            <Navbar/>
            <main>
                <Outlet />
            </main>
        </div>
    );
}