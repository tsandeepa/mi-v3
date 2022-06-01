import styled from "styled-components";

export const HeaderMain = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 13px 20px;
    border-bottom: 1px solid;
    border-color: ${({ theme }) => theme.borderColor};
    .h-left{
        display: flex;
        align-items: center;
        .nav-main{
            display: flex;
            list-style: none;
            align-items: center;
            margin-bottom: 0;
            gap: 20px;
            li{
                color: #073353;
            }
        }
    }
    .h-right{
        display: flex;
        gap: 30px;
        align-items: center;
        .lang-select{
            cursor: pointer;
            display: flex;
            gap: 5px;
            align-items: center;
            img{
                height: 20px;
            }
        }
        .notific{
            font-size: 20px;
            display: flex;
            cursor: pointer;
        }
        .logged-opt{
            cursor: pointer;
            img{
                width: 32px;
                height: 32px;
                border-radius: 50px;
            }
            
        }
    }
`