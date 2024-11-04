import Link from "next/link";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

import './sidebar.css'; // Import the CSS file



export default function Sidebar(){
    return(
        <>
<RxHamburgerMenu  size={40}  className="icon"/>



{/* <MdOutlineCancelPresentation  size={40}/>    */}


<nav>
    <ul className="sidebar">
        <li><Link href="#">HOME</Link></li>
        <li><Link href="#">HOME</Link></li>
        <li><Link href="#">HOME</Link></li>
        <li><Link href="#">HOME</Link></li>
        <li><Link href="#">HOME</Link></li>
        <li><Link href="#">HOME</Link></li>

    </ul>
</nav>
        </>
    )
}




