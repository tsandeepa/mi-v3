import styled from "styled-components";

export const ThemeTable = styled.div`
    padding-bottom: 40px;
    background: ${({ theme }) => theme.tableBG};
    .table-header{
        display: flex;
        border-bottom: 1px solid ;
        border-color: ${({ theme }) => theme.borderColor};
        padding: 10px;
        padding-top: 18px;
        font-weight: 500;
    }
    .table-body{
        padding-top: 10px;
        
        .table-row{
            padding: 10px;
            display: flex;
            border-bottom: 1px solid;
            border-color: ${({ theme }) => theme.borderColor};
            &:hover{
                background: ${({ theme }) => theme.tableRowHover};
            }
        }
    }
    .tbl-avtar-sm{
        width: 32px;
        height: 32px;
        border-radius: 50px;
        margin-right: 10px;
    }
    .avatar-letter{
        font-weight: 500;
        display: inline-flex;
        background: #d9e8f6;
        width: 32px;
        height: 32px;
        border-radius: 50px;
        margin-right: 10px;
        align-items: center;
        justify-content: center;
        text-transform: capitalize;
    }
    .loading-table-row{
        display: flex;
        gap: 5px;
        animation: shadow-loading 0.5s infinite alternate;
        >div{
            height: 35px;
            background: rgb(122,122,122);
            background: linear-gradient(342deg, rgba(222,222,222,19) 0%, rgba(177,177,177,31) 100%);
            border-radius: 4px;
            margin-bottom: 15px;
        }
    }

    @keyframes shadow-loading {
        0%{opacity: 0.1;}
        100%{opacity: 0.2;}
    }
`

