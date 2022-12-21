import Container from "../layout/Container";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import CentralBody from "../layout/CentralBody";
import React from 'react'


function Outside() {
    const [atributes,setAtributes] = React.useState([{}])
    React.useEffect(()=>{
        fetch('assets/rue/data/SocialAtributes.json').then((res)=>res.json()).then((data)=>{
            setAtributes(data)
        })
        
    },[])

  return (
    <Container>
      <Navbar></Navbar>
      <CentralBody
        name="Rue Rivers"
      >
        <div className="flex w-full justify-around items-center mt-10 mb-10">
                <img src= "/assets/rue/images/Social.png" className="object-scale-down h-60 border-8 border-[#630000] " alt="" />
                <div className="flex flex-col w-1/4 h-60 justify-evenly">
                    <div className='grid grid-cols-2 font-mono text-2xl'>
                        <p className='col-span-1 font-semibold text-left'>Knowledge: </p>
                        <p className='col-span-1 text-right'>{atributes[0].Knowledge} (+{Math.floor(atributes[0].Knowledge/5)})</p>
                    </div>

                    <div className='grid grid-cols-2 font-mono text-2xl'>
                        <p className='col-span-1 font-semibold text-left'>Guts: </p>
                        <p className='col-span-1 text-right'>{atributes[0].Guts} (+{Math.floor(atributes[0].Guts/5)})</p>
                    </div>

                    <div className='grid grid-cols-2 font-mono text-2xl'>
                        <p className='col-span-1 font-semibold text-left'>Endeavor: </p>
                        <p className='col-span-1 text-right'>{atributes[0].Endeavor} (+{Math.floor(atributes[0].Endeavor/5)})</p>
                    </div>

                    <div className='grid grid-cols-2 font-mono text-2xl'>
                        <p className='col-span-1 font-semibold text-left'>Charm: </p>
                        <p className='col-span-1 text-right'>{atributes[0].Charm} (+{Math.floor(atributes[0].Charm/5)})</p>
                    </div>

                    <div className='grid grid-cols-2 font-mono text-2xl'>
                        <p className='col-span-1 font-semibold text-left'>Body: </p>
                        <p className='col-span-1 text-right'>{atributes[0].Body} (+{Math.floor(atributes[0].Body/5)})</p>
                    </div>
                    
                    <div className='grid grid-cols-2 font-mono text-2xl'>
                        <p className='col-span-1 font-semibold text-left'>Defiance: </p>
                        <p className='col-span-1 text-right'>{atributes[0].Defiance} (+{Math.floor(atributes[0].Defiance/5)})</p>
                    </div>
                </div>
                
            </div>

        <div className="w-full bg-[#630000] h-[40px] flex justify-center items-center">
            <h2 className="text-white font-mono text-3xl b-5">Arcanas</h2>
        </div>

      </CentralBody>
      <Footer></Footer>
    </Container>
  );
}

export default Outside;
