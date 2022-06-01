import styled from "styled-components";

export const SearchTop = styled.div`
    display: flex;
    gap: 15px;
    margin-top: 22px;
    margin-bottom: 22px;
    .search-wide{
        max-width: 300px;
    }
    .input-w-sm{
        max-width: 200px;
    }
    .ant-select-selector{
        min-width: 200px;
        border-radius: 5px !important;
        height: 100% !important;
        padding-top: 6px !important;
    }
    .ant-input-affix-wrapper{
        border-radius: 5px;
        input{
            padding: 4px;
        }
    }
    .ant-picker{
        border-radius: 5px;
    }
`