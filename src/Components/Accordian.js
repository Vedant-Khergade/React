
import React from 'react';


export default function Accordian(props) {

  //const [btnText,setText]=useState('Enable dark modeN');

  // const [modeN,setmodeN]=useState({

  //     backgroundColor:'white',

  //     color:'black'

  // })

  // const change=()=>{

  //     if(modeN.color==='black'){
  //         setmodeN({
  //             backgroundColor:'black',

  //             color:'white'

  //         })

  //         setText('Disable dark modeN');
  //     }

  //     else{

  //         setmodeN({
  //             backgroundColor:'white',

  //             color:'black'

  //         })
  //         setText('Enable  dark modeN');
  //     }



  let modeN = {

    color: props.mode === 'light' ? 'dark' : 'white',

    backgroundColor: props.mode === 'light' ? 'white' : '#464344'
  }









  return (
    <>
      <div >

        <div className='container' >
          <h2 style={{ color: props.mode === 'light' ? 'dark' : 'white' }}>About Us</h2>
        </div>

        <div className="accordion container "      id="accordionExample">
          <div className="accordion-item" style={modeN}>
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" style={{color: props.mode === 'light' ? 'dark' : 'white',}} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body" >
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={modeN}>
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed"  type="button" style={modeN} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={{ color: props.mode === 'light' ? 'dark' : 'white' }}>
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={modeN}>
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" style={modeN} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body" >
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>

        {/* <button className='mx-5 my-3 btn btn-primary ' onClick={change}>{btnText}</button> */}
      </div>

    </>
  )

}

