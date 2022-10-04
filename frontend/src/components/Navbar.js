
export default function Navbar(){
    return (
    <nav class="navbar navbar-expand-lg bg-light">
    <div class="container">
        <a class="navbar-brand" href="#"><span className="icon">Dima's blog</span></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
            </li>

            <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
            </li>
        </ul>
        <form class="d-flex" role="search">
            <button type="button" class="btn btn-outline-primary">Зайти</button>
            <button type="button" class="btn btn-primary">Вийти</button>
        </form>
        </div>
    </div>
    </nav>
    )
}