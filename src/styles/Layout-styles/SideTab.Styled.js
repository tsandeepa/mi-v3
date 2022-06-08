import styled from "styled-components";

export const SideTabbed = styled.div`
    display: flex;
    .left-tb{
        width: 30%;
        max-width: 400px;
        .side-title{
            margin-bottom: 30px;
            h3{
                font-size: 21px;
                font-weight: 700;
                margin-bottom: 0;
                color: ${({ theme }) => theme.textColorPrimary};
            }
        }
    }
    .right-vw{
        /* width: 70%; */
        flex: 1;
        padding: 20px;
        .right-title{
            margin-bottom: 30px;
            h4{
                font-size: 18px;
            }
        }
    }

`

