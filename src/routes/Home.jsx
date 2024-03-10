import HomeItem from '../components/HomeItem';
import { useSelector } from 'react-redux';

const Home = () =>{

 const items = useSelector (store => store.items);
//   console.log(items);


    return (
        <main>
            <div className='main-page'>
                <section class="home" id="home">
        
        <div class="content">
          <h3>fresh cofee in the morning</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum iusto repellat reprehenderit modi odio eius error doloribus nobis iste. Beatae?</p>
          <a href="#" class="btnnn">get yours now</a>
      </div>
     </section>
     
     <div className="items-container">

            
{items.map(item =>             <HomeItem key={item.id} item={item}/>
)}
</div>
     </div>
           
        </main>
    )
}

export default Home ;