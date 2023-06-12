import React, { useState } from "react";
import "./GioHang.css"


export default function GioHang() {

    const [cart] = useState([]);
    const [totalPrice] = useState(0);
    const [products] = useState(0);


    const test = [
        { id: 1, content: "Write Viblo Post" },
        { id: 2, content: "Do 15000 push up" },
        { id: 3, content: "Fix some bugs" }
    ];


    return (
        <>

            
                
                    <div class="DetailProduct">
                        {test.map(item =>
                        (

                            <div class="row">
                                <table class="table shoping-cart-table">
                                    <tbody>
                                        <tr>
                                            <td width="20%">
                                                <div class="cart-product-image">
                                                </div>
                                            </td>
                                            <td class="desc" width="50%">
                                                <h4>
                                                    {item.content}
                                                </h4>
                                                <p class="small">
                                                    1 MÌ, 1 TRỨNG, 1 COCA
                                                </p>
                                                <dl class="small m-b-none">
                                                    <dt>Description lists</dt>
                                                    <dd>+ 1 Coca.</dd>
                                                    <dd>+ 1 Coca.</dd>
                                                </dl>

                                                <div class="m-t-sm">
                                                    <a href="#" ><i class="fa fa-gift"></i> Sửa</a>
                                                    |
                                                    <a href="#" ><i class="fa fa-trash"></i> Xóa</a>
                                                </div>
                                            </td>

                                            <td style={{ width: "30%" }}>

                                                <div class="row" style={{ alignItems: "center" }}>
                                                    <button style={{ borderRadius: "50%", border: "1px solid white" }} key={0}
                                                        onClick={() => products.setState = products + 1}>
                                                        -
                                                    </button>

                                                    <input min="0" name="quantity" value={products} type="number"
                                                        style={{ width: "50px" }} />

                                                    <button style={{ borderRadius: "50%", border: "1px solid white" }} key={1}
                                                        onClick={() => products = products + 1}>
                                                        +
                                                    </button>
                                                    <p style={{ paddingLeft: "20px" }}> $180,00</p>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        ))}
                        <div class="row" style={{ paddingTop: "20px" }}>
                            <h2>Sẽ ngon hơn khi thưởng thức cùng</h2>
                            <table class="table shoping-cart-table">
                                <tbody>
                                    <tr>
                                        <td width="20%">
                                            <div class="cart-product-image">
                                            </div>
                                        </td>
                                        <td class="desc" width="60%">
                                            <h4>
                                                Combo 1
                                            </h4>
                                            <p class="small">
                                                1 MÌ, 1 TRỨNG, 1 COCA
                                            </p>
                                            <dl class="small m-b-none">
                                                <dt>Description lists</dt>
                                                <dd>+ 1 Coca.</dd>
                                                <dd>+ 1 Coca.</dd>
                                            </dl>
                                        </td>

                                        <td style={{ width: "20%", textAlign: "center" }}>
                                            <p> $180,00</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>


                    <div className="DetailPrice">
                        <div class="col-md-12">
                            <h4>{test.length} Món</h4>
                            <hr width="90%"
                                color="red"
                                align="center"
                                size="5px"></hr>
                            <p>Bạn có mã giảm giá?</p>
                            <div class="row">
                                <div class="form-group mx-sm-3 mb-2">
                                    <input type="text" class="form-control"  placeholder="Mã giảm giá"/>
                                </div>
                                <button type="submit" class="btn btn-danger mb-2">Áp dụng</button>
                            </div>
                            <hr width="90%"
                                color="red"
                                align="center"
                                size="5px"></hr>
                            <div class="row">
                                <p style={{ paddingLeft:"20px", width: "80%" }}>tổng đơn hàng</p>
                                <p style={{ float: "right", width: "20%" }}>70.000đ</p>
                            </div>
                            <div class="row">
                                <p style={{ paddingLeft:"20px", width: "80%" }}>Phí giao hàng</p>
                                <p style={{ float: "right", width: "20%" }}>70.000đ</p>
                            </div>
                            <div class="row">
                                <p style={{ paddingLeft:"20px", width: "80%" }}>tổng thanh toán</p>
                                <p style={{ float: "right", width: "20%" }}>70.000đ</p>
                            </div>
                            <button type="submit" class="btn btn-danger col-md-12">thanh toán</button>
                        </div>
                    </div>
                
            

        </>
    )
}