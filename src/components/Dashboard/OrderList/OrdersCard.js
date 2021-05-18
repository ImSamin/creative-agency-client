import React from 'react';
import icon from '../../../images/icons/service5.png'

const OrdersCard = ({ orderList }) => {

    return (

        <div className="col-md-4 mb-3 px-4 ">
            <div className="card  p-4 h-100 rounded-lg">
                <div className="d-flex justify-content-between mb-3">
                    {
                         orderList && orderList.image? 
                        <img className="img-fluid round-circle" style={{ height: '60px' }} src={`data:image/png;base64,${orderList.image.img}`} alt="" />
                        :
                            <img className="img-fluid round-circle" style={{ height: '60px' }} src={icon} alt="" />
                        
                      
                    }
                    <button className=" btn  text-warning   ">Pending</button>
                </div>
                <h5 class="card-title">{orderList.title}</h5>
                <p class="card-text text-secondary">{orderList.details}</p>

            </div>
        </div>

    );
};

export default OrdersCard;