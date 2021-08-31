export default function Header() {
    return(
        <header>
            <div className="logo">
               <a href="#"><img src={`https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png`}></img></a>
            </div>
            <nav>
                <i className="fas fa-search"></i>
                <a href="#"><img src={`https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png`}></img></a>
            </nav>
        </header>
    );
}