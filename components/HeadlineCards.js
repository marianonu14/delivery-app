import Card from "./Card";
import imgCard1 from '../public/img1.jpg'
import imgCard2 from '../public/img2.jpg'
import imgCard3 from '../public/img3.jpg'

const HeadlineCards = () => {
    return ( 
        <div className="flex flex-col md:flex-row lg:gap-5 py-10 px-5">
            <Card text={'Halloumi burgers'} price={'12.90'} img={imgCard1}/>
            <Card text={'One-pan spaghetti with nduja'} price={'24.32'} img={imgCard2}/>
            <Card text={'Frying pan pizza'} price={'7.80'}  img={imgCard3}/>
        </div>
     );
}
 
export default HeadlineCards;