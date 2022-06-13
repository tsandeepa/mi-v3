import styled from "styled-components";

export const EmpSideMain = styled.div`
    
    .side-p-top{
        display: flex;
        align-items: center;
        margin-bottom: 30px;
        .sp-img{
            margin-right: 15px;
            img{
                width: 100px;
                height: 100px;
                object-fit: cover;
                border-radius: 100px;
            }
            .spi-letter{
                text-transform: capitalize;
                width: 100px;
                height: 100px;
                background:#D9E8F6;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 50px;
                margin: 0 !important;
                border-radius: 100px;
                color: #6184a5;
            }
        }   
        .sp-ifo{
            h5{
                font-size: 25px;
                font-weight: 700;
                margin-bottom: 0;
            }
        } 
    }

    .pannel-updating{
        background: #ffffffc9;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color: #5679a4;
        svg{
            font-size: 25px;
        }
    }
    
`