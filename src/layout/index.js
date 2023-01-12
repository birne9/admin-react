import Siderbar from "./components/Sidebar"
import Appmain from "./components/Appmain"

const Layout=()=>{
    return (
        <div style={{display:'flex'}}>
            <Siderbar></Siderbar>
            <Appmain></Appmain>
        </div>
    )
}
export default Layout