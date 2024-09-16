import { acData } from '../data/ac'
export default function Ac(){
    const firstFiveImages = acData.slice(0,5) 
    return(<>
    <div className="proTitle"><h2>Ac</h2></div>
    
        <div className='proSection'>
            {
                firstFiveImages.map((item)=>{
                    return (
                        <div className='imgBox'>
                            <img className='proimg'src={item.image} alt="" />
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}