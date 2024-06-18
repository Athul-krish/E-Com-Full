// import { Typography } from '@mui/material'
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


const Home = () => {
  const text = 'Login'
  return (
    <div>
        <header>
            <Navbar text={text} buttonText={"Products"} path="/products" path_second="/login"/><br />
        </header>
        <body>
          <img src="https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1717459200&semt=ais_user" alt="Img" />
        
        <p><h2>Welcome</h2>to our E-commerce website where, you can buy or sell Products</p>
        <br /><br /><br />

        <p style={{alignItems:'left',marginRight:'85%'}}><h3>More about us:</h3></p>

        <p style={{fontFamily:'monospace',fontSize:'large',alignItems:'center'}}>We are always looking for opportunities to fulfill our mission through our provided services! From warehousing and inventory to fulfilling and shipping,<br/>
        we can help you fulfill your orders, helping us fulfill our dreams. Check out our services page to learn more.
        As we work together, not only are you receiving quality, personal care for your shipments, you are supporting adults with special needs by providing increased employment opportunities, allowing our associates to realize their infinite potential.</p>
        </body>
       <Footer/>
        
    </div>
  )
}

export default Home
