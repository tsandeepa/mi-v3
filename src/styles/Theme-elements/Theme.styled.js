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
    .ant-menu-vertical{
        border: none !important;
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
    ::-webkit-file-upload-button {
        cursor:pointer;
    }
    .ant-drawer-header-title{
        justify-content: end !important;
    }
    .ant-image-mask{
        background: transparent !important;
        .ant-image-mask-info{
            font-size: 12px !important;
        }
    }
    .ant-btn-circle{
        width: 28px;
        height: 28px;
        min-width: 28px !important;
        border-radius: 50px !important;
        padding: 0 !important;
        display: flex;
        align-items: center;
        justify-content: center;
    }

`
export default GlobalTheme
