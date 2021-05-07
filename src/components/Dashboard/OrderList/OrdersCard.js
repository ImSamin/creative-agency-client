import React from 'react';

const OrdersCard = ({orderList}) => {
    console.log(orderList)
    return (

        <div className="col-md-4 mb-3  ">
            <div className="card  p-4 h-100 rounded-lg">
                <div className="d-flex justify-content-between mb-3">
                    <img className="img-fluid round-circle" style={{ height: '60px' }} src={`data:image/png;base64,${orderList.image.img}`} alt="" />

                    <button className=" btn btn btn-outline-warning">Pending</button>
                </div>
                 <h5 class="card-title">{orderList.title}</h5>
                 <p class="card-text text-secondary">{orderList.description}</p>

            </div>
        </div>
        // <div class="card w-10 mt-5 ml-3 mr-3 d-flex">
        //     <div class="card-body">
        //         <img src="" alt=""/>
        //         <h5 class="card-title">Card title</h5>
        //         <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        //         <a href="#" class="btn btn-primary">Button</a>
        //     </div>
        // </div>
    );
};

export default OrdersCard;