import { createGlobalStyle } from "styled-components";

const GlobalTheme = createGlobalStyle`
    .ant-btn{
        height: inherit;
        padding: 10px 20px;
        border-radius: 4px;
    }
    .ant-input{
        padding: 10px;
        border-radius: 4px;
    }
    .ant-select-selector{
        height: 44px !important;
        border-radius: 4px !important;
        .ant-select-selection-item{
            line-height: 41px !important;
        }
    }

    .fixed-pagination{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 10px 20px;
        background: ${({ theme }) => theme.bodyBG};
        border-top: 1px solid;
        border-color: ${({ theme }) => theme.borderColor};
        text-align: right;
        .ant-pagination-item-active{
            background: transparent;
        }
        .ant-pagination-item {
            a{
                color: ${({ theme }) => theme.textColorPrimary} ;
            }
        }
    }


`
export default GlobalTheme
