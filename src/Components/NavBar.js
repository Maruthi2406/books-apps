import Logo from "./Logo";
import Result from "./Result";
import Search from "./Search";

export default function NavBar(){
    return(
    <nav className="navbar">
        <Logo />
        <Search />
        <Result />
    </nav>
    );
}