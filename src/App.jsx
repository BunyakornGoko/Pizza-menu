import "../public/index.css"
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false
  }
]
export default function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <>
      <div className="header">
        <h1>Fast React Pizza Co.</h1>
      </div>
    </>
  )
}

function Menu() {
  const pizzas = pizzaData
  // const pizzas = []
  const numPizzas = pizzas.length
  return (
    <>
      <main className="menu">
        <h2>Our menu</h2>

        {numPizzas > 0 ? (
          <>
            <p>
              Authentic Italian cuisine. 6 creative dishes yo choose from. All
              from our stone ovenm all organic, all delicious.
            </p>
            <ul className="pizzas">
              {pizzas.map((pizza) => (
                <Pizza pizzaObj={pizza} key={pizza.name} />
              ))}
            </ul>
          </>
        ) : (
          <p>We're still working on our menu. Please come back later :)</p>
        )}
        {/* <Pizza name='Pizza Spinaci' 
          ingredient='Tomato, mozarella, spinach' 
          photoName='../public/pizzas/spinaci.jpg' 
          price={10} 
        />
        <Pizza name='Pizza Spinaci' 
          ingredient='Tomato, mozarella, spinach' 
          photoName='../public/pizzas/spinaci.jpg' 
          price={12} 
        /> */}
      </main>
    </>
  )
}

function Pizza({ pizzaObj }) {
  // if (pizzaObj.soldOut) {
  //   return null
  // }
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        {/* {pizzaObj.soldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <span>{pizzaObj.price}</span>
        )} */}
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  )
}

function Footer() {
  const hour = new Date().getHours()
  const openHour = 12
  const closeHour = 22
  const isOpen = hour >= openHour && hour <= closeHour
  // if (!isOpen) {
  //   return <p>CLOSED</p>
  // }
  return (
    <>
      <footer className="footer">
        {isOpen ? (
          <Order closeHour={closeHour} openHour={openHour} />
        ) : (
          <p>
            We're to welcome you between {openHour}:00 and {closeHour}:00.
          </p>
        )}
      </footer>
    </>
  )
}

function Order({ closeHour, openHour }) {
  return (
    <>
      <div className="order">
        <p>
          We're open from {openHour}:00. to {closeHour}:00. Come visit us or
          order online.
        </p>
        <button className="btn">Order now</button>
      </div>
    </>
  )
}
