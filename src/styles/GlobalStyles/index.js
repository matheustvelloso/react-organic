import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        font-family: 'Roboto', sans-serif;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html, body, #root{
        min-height: 100vh;
    }
    body{
       background-color: #D9F9E9;   
    }
    h1, h2, h3, h4, h5, h6{
        font-family: 'playfair display',serif;
    }
    a{
        text-decoration: none;
        color: #000;
    }
    .table{
        border-collapse: collapse;
        border-spacing: 0;
    }
    a:hover{
        color: #97ae76;
    }
    .select{
        background-color: #00000000;
        border: none;
        max-height: 20px;
    }
    .flex-1{
        flex: 1;
    }
    .fs-icon{
        font-size: 20px;
        font-weight: 200;
    }
    .bg-white{
        background-color: #fff;
    }
    .bg-green{
        background-color: #d2ffea;
    }
    .border-products div:nth-child(n){
        border: 1px solid #e6e6e6;
    }
    .btn-view{
        font-size: 14px;
        padding: 0 37px;
        border-radius: 25px;
        line-height: 46px;
        background-color: #97ae76;
        color: #fff;
        border: 2px solid #97ae76;
        transition: all .3s ease-in-out;

    }
    .btn-view:hover{
        background-color: #7e975a;
        border-color: #7e975a;
        color: #fff;
    }
    .date{
        color: #999;
    }
    .text-grey{
        color: #333;
    }
    .bg-grey{
        background-color: #edf2f5;
    }
    .btn-email{
        border-radius: 50%;
        background-color: #97ae76;
        color: #fff;
        font-size: 36px;
        padding: 6px;
    }
    .me-credit-card img:nth-child(n){
        margin-left: 16px;
    }
    .pe-credit-card img:last-child{
        margin-left: 0;
    }
    .text-green{
        color: #97ae76;
    }
    .price{
        color: #666666;
    }
    .icon-box{
    font-size: 60px;
    margin-bottom: 12px;
    }
    .border-green{
        border: 1px solid #97ae76;
    }
    .border-top{
        border-top: 1px solid #ccc;
    }
    .hover a:hover:nth-child(n){
        background-color: #97ae76;
        color: #fff;
    }
    .form-control:focus {
    border-color: #66afe9;
    outline: 0;
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%);
    } 
    .btn-send{
        font-family: 'Roboto', sans-serif;
        border-radius: 30px;
        padding-right: 32px;
        padding-left: 32px;
        padding-top: 14px;
        padding-bottom: 14px;
        border: none;
        background-color: #97ae76;
        color: #fff;
        transition: 500ms;
    } 
    .btn-send:hover{
        background-color: #7e975a;
        border-color: #7e975a;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }
    .facebook{
        color: #666;
        transition: all .3s ease-in-out;
        font-size: 18px;
        padding-right: 9px;
    } 
    .facebook:hover{
        color: #365396;
    }
    .pinterest{
        color: #666;
        transition: all .3s ease-in-out;
        font-size: 18px;
        padding: 0 9px;
    } 
    .pinterest:hover{
        color: #cc1919;
    }
    .twitter{
        color: #666;
        transition: all .3s ease-in-out;
        font-size: 18px;
        padding: 0 9px;
    } 
    .twitter:hover{
        color: #00a8f0;
    }
    .google-plus{
        color: #666;
        transition: all .3s ease-in-out;
        font-size: 22px;
        padding: 0 9px;
    } 
    .google-plus:hover{
        color: #e0462e;
    }
    .instagram{
        color: #666;
        transition: all .3s ease-in-out;
        font-size: 18px;
        padding: 0 9px;
    } 
    .instagram:hover{
        color: #386c99;
    }
    .p-th th:nth-child(n){
        padding: 17px 30px;
    }
    .p-td td:nth-child(n){
        padding: 40px 30px;
    }
    .p-th-td th,td:nth-child(n){
        padding: 17px 30px;
    }
    li{
        list-style: none;
    }
    @media(min-width: 992px){
        .w-lg-50{
            width: 50% !important;
        }
    }
`
