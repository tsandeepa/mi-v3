import styled from "styled-components";

export const LoginMain = styled.div`
    height: 100vh;
    display: flex;
    .lc-left{
        width: 50%;
        position: relative;
        /* background-image: url('assets/images/BG.png'); */
        .c-holder{
            /* width: 100%; */
            .slide-item{
                height: 100vh;
                display: flex !important;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                img{
                    margin: 0 auto;
                    
                }
                h3{
                    color: #fff;
                    font-size: 26px;
                    max-width: 370px;
                    margin-top: 20px;
                }
                p{
                    color: #869EB4;
                    max-width: 500px;
                    margin-top: 10px;
                }
            }
        }
    }
    .lc-right{
        width:50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .sign-box{
            width: 500px;
            margin: 0 auto;
            .log-titles{
                img{
                    margin-bottom: 15px;
                }
                h1{
                    font-size: 33px;
                    font-weight: 700;
                    margin-bottom: 8px;
                }
                p{
                    color: #869EB4;
                    font-size: 15px;
                }
            }
            .sign-forgot{
                display: flex;
                justify-content: space-between;
            }
        }
    }
`