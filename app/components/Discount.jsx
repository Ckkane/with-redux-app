const Discount = ({data}) => {

    let items = data.product;

    return (
        <div>
            <div className='container'>
                <h1 style={{fontSize:'25px'}}>Скидки дня</h1>
                <div style={{display:'flex'}}>
                    {[...items].sort((a,b) => b.discount - a.discount).slice(0,4).map((e)=>{
                        return <div style={{display:'flex', flexDirection:'column', alignItems:'center', backgroundColor:'rgb(255 243 218)', padding:'15px', boxShadow:'rgb(242, 242, 242) 1px 1px 10px',borderRadius:'10px',margin:'10px'}}>
                            <img height={150} width={150} src={e.image} alt="" srcset="" />
                            <span style={{textAlign:'center', fontWeight:'500'}}>{e.title}</span>
                            <div style={{display:'flex',width:'100%',justifyContent:'space-between',alignItems:'center'}}>
                                <span style={{color:'#1acd1a'}}>Скидка {e.discount}%</span>
                                <div style={{display:'flex',flexDirection:'column'}}>
                                    <span style={{fontSize:'12px', color:'rgb(147, 147, 147)', textDecoration:'line-through'}}>{e.price}₽</span>
                                    <span style={{fontSize:'12px', color:'rgb(147, 147, 147)'}}>{(((100 - e.discount) / 100) * e.price).toFixed(0)}₽</span>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}




export default Discount;