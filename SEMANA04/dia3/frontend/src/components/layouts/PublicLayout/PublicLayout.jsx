import { PublicHeader } from "../../common/PublicHeader/PublicHeader"
import { Outlet } from "react-router-dom"


export const PublicLayout = ({ children }) => {
    return (
        <div className='Public-layout'>
            <PublicHeader />
            <Outlet />
        </div>
    )
}