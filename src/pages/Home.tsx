import Header from "../components/Header";
import Product from "../components/Product";

function Home() {
  return (
    <div className="bg-gradien">
    <div >
      
      <Header />
      <div className="h-14  mt-32 text-center flex items-center justify-center">
        prmotion place
         
      </div>
      <div className="text-3xl pt-16 text-center font-bold text-gray-800 max-w-screen-xl mx-auto">Latest Products</div>
 
    </div>
    <Product />
    </div>
  );
}

export default Home;