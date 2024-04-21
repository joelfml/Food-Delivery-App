import React from 'react';
import productsData from '../data/productsData';
import ProductsCard from '../components/ProductsCard';

import axios from 'axios';
import { useState, useEffect } from 'react';









const Home = () => {



const client = axios.create({
  baseURL: "http://localhost:8080/api/tutorials"
});


const [posts, setPosts] = useState([]);

   useEffect(() => {
      client.get('/published').then((response) => {
         setPosts(response.data);
      });
   }, []);




    return (
        <>
            <section id="home">
                <div className="container">
                    <div className="home_content">
                        {
                            posts.map((item) => (
                                <ProductsCard key={item.id} id={item.id} img={"/images/cutlery.png"} rating="★★★★" title={item.title} price={item.description} quantity={1} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;