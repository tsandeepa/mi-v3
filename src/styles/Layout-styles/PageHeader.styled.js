import styled from "styled-components";

export const TitleTop = styled.div`
    display: flex;
    justify-content: space-between;
    .th-l{
        .bredCrumb{
            font-size: 13px;
            color: #869EB4;
        }
        h3{
            font-size: 21px;
            font-weight: 700;
            margin-bottom: 0;
            color: ${({ theme }) => theme.textColorPrimary};
        }
    }
`