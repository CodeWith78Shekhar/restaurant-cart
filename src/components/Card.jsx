import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { add } from '../redux/features/cartSlice';
import { useDispatch , useSelector} from 'react-redux';

function BasicExample() {
    const [data, setData] = useState([]);
    const dispatch = useDispatch()
    const CartItems = useSelector((state)=>state.cart);
    const addToCart = (item)=>{
        
        dispatch(add(item));
    }

   const generateQt = (productId)=>{
    const Items = CartItems.find((i)=> i.id === productId);
    return Items ? Items.quantity : 0;
   }

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setData(json))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div style={{ border: '1 px solid black', marginTop: '8vh', width: '90%', marginLeft: '5vw', display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
            {data.map(product => (
                <Card key={product.id} style={{ width: '18rem', marginBottom: '20px' }}>
                    <Card.Img variant="top" src={product.image} style={{width:'15vw', height:'40vh'}}/>
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>{product.price}</Card.Text>
                        <Card.Text>Selected :{generateQt(product.id)} </Card.Text>
                        <Button variant="primary" 
                         onClick={()=>addToCart(product)
                         }>Add to cart</Button>
                        <Button variant="primary" style={{marginLeft:'10px'}}>Remove to cart</Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}

export default BasicExample;
