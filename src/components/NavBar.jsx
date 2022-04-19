import '../index.css'


export default function NavBar() {
    return (
        <header>
            <div className='header-container'>
               <img className='header-logo' src="../../img/logo-world.svg" alt="Travel Journal" />
               <a href='/'>my travel journal.</a>
            </div>
        </header>
    ); 
}