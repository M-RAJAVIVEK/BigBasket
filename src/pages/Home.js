import  c1  from './im/c1.jpeg';
import  c2  from './im/c2.jpeg';
import  c3 from './im/c3.jpeg';
import  p1 from './im/p1.png';
import  p2 from './im/p2.png';
import  p4 from './im/p4.png';
import  j2 from './im/j2.jpeg';
import  j3 from './im/j3.jpeg';
import  j4 from './im/j4.jpeg';
import  u1 from './im/u1.jpeg';
import  u2 from './im/u2.jpeg';
import  u3 from './im/u3.jpeg';


const Home=()=>{
    return(
        <>
          <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={c1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={c2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={c3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


<div>
  <h3 className='h3'>Product 1</h3>
  </div>


<div class="card-group">
  <div class="card">
    <img src={p1} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <center>
              <button type="button" class="btn btn-primary">BUY</button> <button type="button"
                class="btn btn-secondary">ADD CARDS</button>
            </center>
    </div>
  </div>
  <div class="card">
    <img src={p2} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.This card has even longer content than the first to show that equal height action.

      </p>
      <center>
              <button type="button" class="btn btn-primary">BUY</button> <button type="button"
                class="btn btn-secondary">ADD CARDS</button>
            </center>
    </div>
  </div>
  <div class="card">
    <img src={p4} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <center>
              <button type="button" class="btn btn-primary">BUY</button> <button type="button"
                class="btn btn-secondary">ADD CARDS</button>
            </center>
    </div>
  </div>
</div>

<div>
  <h3 className='h3'>Product 2</h3>
</div>



<div class="card-group">
  <div class="card">
    <img src={j2} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <center>
              <button type="button" class="btn btn-primary">BUY</button> <button type="button"
                class="btn btn-secondary">ADD CARDS</button>
            </center>
    </div>
  </div>
  <div class="card">
    <img src={j3} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.This card has even longer content than the first to show that equal height action.</p>
      <center>
              <button type="button" class="btn btn-primary">BUY</button> <button type="button"
                class="btn btn-secondary">ADD CARDS</button>
            </center>
    </div>
  </div>
  <div class="card">
    <img src={j4} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <center>
              <button type="button" class="btn btn-primary">BUY</button> <button type="button"
                class="btn btn-secondary">ADD CARDS</button>
            </center>
    </div>
  </div>
</div>


<div>
  <h3 className='h3'>Product 3</h3>
</div>


<div class="card-group">
  <div class="card">
    <img src={u1} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <center>
              <button type="button" class="btn btn-primary">BUY</button> <button type="button"
                class="btn btn-secondary">ADD CARDS</button>
            </center>
    </div>
  </div>
  <div class="card">
    <img src={u2} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.This card has even longer content than the first to show that equal height action.</p>
      <center>
              <button type="button" class="btn btn-primary">BUY</button> <button type="button"
                class="btn btn-secondary">ADD CARDS</button>
            </center>
    </div>
  </div>
  <div class="card">
    <img src={u3} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <center>
              <button type="button" class="btn btn-primary">BUY</button> <button type="button"
                class="btn btn-secondary">ADD CARDS</button>
            </center>
    </div>
  </div>
</div>

<center>
 <h2> @Copyright</h2>
</center>


        </>
    )

}
export default Home;