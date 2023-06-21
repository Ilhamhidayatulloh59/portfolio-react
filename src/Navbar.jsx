import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './style.css';
// import Carousel from 'react-bootstrap/Carousel';
// import Card from 'react-bootstrap/Card';
import { BsFillHeartFill } from "react-icons/bs";


function ColorSchemesExample() {
    return (
    <>
    <Navbar bg="primary" variant="dark" fixed='top' className='shadow-lg'>
        <Container>
            <Navbar.Brand href="#home">My Portofolio</Navbar.Brand>
            <Nav id='navbarNav' className="justify-content-center">
            <Nav.Link className='active' href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#gallery">Gallery</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
        </Container>
    </Navbar>


        {/* Jumbotron */}
    <section id='home' class="jumbotron text-center">
        <img src={require("./img/rsz_134525237_436850824137597_6381030926067036247_n.jpg")} alt="ilham hidayatulloh" width="200px" class="rounded-circle img-thumbnail"/>
        <h1 class="display-4">Ilham Hidayatulloh</h1>
        <p class="lead">Student | JCWD Purwadhika Jakarta</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,224L40,234.7C80,245,160,267,240,261.3C320,256,400,224,480,218.7C560,213,640,235,720,229.3C800,224,880,192,960,154.7C1040,117,1120,75,1200,90.7C1280,107,1360,181,1400,218.7L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
    </section>


    <section id="about">
        <div class="container">
            <div class="row text-center mb-4">
                <div class="col">
                    <h2>About Me</h2>
                </div>
            </div>
            <div class="row justify-content-center fs-5 text-center">
                <div class="col-md-4">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, cumque rem reprehenderit, tenetur ipsa magni voluptatum porro, molestiae ut debitis enim? Maiores quam rerum ullam sed accusantium, distinctio laudantium maxime.</p>
                </div>
                <div class="col-md-4">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam accusamus, unde at deserunt placeat reiciendis est ut. Officiis esse adipisci eos iste voluptas nihil voluptate.</p>
                </div>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#548CFF" fill-opacity="1" d="M0,96L48,112C96,128,192,160,288,154.7C384,149,480,107,576,90.7C672,75,768,85,864,128C960,171,1056,245,1152,277.3C1248,309,1344,299,1392,293.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </section>

    <section id="gallery">
        <div class="container">
            <div class="row text-center mb-4">
                <div class="col">
                    <h2>Gallery Me</h2>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-md-4 mb-3">
                    <div class="card">
                        <img src={require("./img/galery 1.jpg")} class="card-img-top" alt="galery 1"/>
                        <div class="card-body">
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum cupiditate porro inventore, laborum itaque debitis unde optio quis distinctio vitae quod, facilis magnam? Alias, omnis.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="card">
                        <img src={require("./img/galery 2.gif")} class="card-img-top" alt="galery 2"/>
                        <div class="card-body">
                        <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem ratione deleniti velit non neque nihil natus cum itaque quam odio.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="card">
                        <img src={require("./img/galery 3.jpg")} class="card-img-top" alt="galery 3"/>
                        <div class="card-body">
                        <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus commodi aspernatur, nihil repellendus veritatis assumenda aut omnis sint earum quam?</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="card">
                        <img src={require("./img/galery 4.jpg")} class="card-img-top" alt="galery 4"/>
                        <div class="card-body">
                        <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel obcaecati quos, ducimus dolor quis atque fugiat libero. Esse, placeat unde.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <div class="card">
                        <img src={require("./img/galery 5.jpg")} class="card-img-top" alt="galery 5"/>
                        <div class="card-body">
                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, nisi? Labore eos, eveniet odit illo reiciendis suscipit soluta id dignissimos.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,32L48,26.7C96,21,192,11,288,37.3C384,64,480,128,576,138.7C672,149,768,107,864,122.7C960,139,1056,213,1152,240C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </section>


    <section id="contact">
    <div class="container">
        <div class="row text-center mb-4">
            <div class="col">
                <h2>Contact Me</h2>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-6 mb-3">
                <form>
                <div class="mb-3">
                    <label for="name" class="form-label">Nama Lengkap</label>
                    <input type="text" class="form-control" id="name" aria-describedby="name"/>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" aria-describedby="email"/>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="pesan" class="form-label">Pesan</label>
                    <textarea class="form-control" id="pesan" rows="3"></textarea>
                    </div>
            
                <button type="submit" class="btn btn-primary">Kirim</button>
                </form>
            </div>
        </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0000FF" fill-opacity="1" d="M0,224L48,234.7C96,245,192,267,288,266.7C384,267,480,245,576,245.3C672,245,768,267,864,245.3C960,224,1056,160,1152,144C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
</section>

<footer class="text-white text-center pb-5" style= {{backgroundColor: 'blue'}}>
        <p>Created with <BsFillHeartFill color='red'/> by <a href="https://www.instagram.com/ilhamhidayatulloh05/" class="text-white fw-bold" target="_blank" rel="noopener noreferrer">Ilham Hidayatulloh</a></p>
    </footer>

    </>

    );
}

export default ColorSchemesExample;