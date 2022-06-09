import styled from "styled-components";

export const Container = styled.div`
    padding: 20px;
    .p-20{
        padding: 20px;
    }
    .flex-between-center{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .form-box{
        border: 1px solid;
        border-color: ${({ theme }) => theme.borderColor};
        border-radius: 5px;
        margin-bottom: 20px;
        .fb-header{
            padding: 15px 20px;
            border-bottom: 1px solid;
            border-color: ${({ theme }) => theme.borderColor};
            h4{
                font-size: 24px;
                margin-bottom: 0;
            }
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .fb-content{
            padding: 15px 20px;
        }
    }
    .user-img-upload{
        display: flex;
        align-items: center;
        .user-circle{
            background: #EAF2FA;
            width: 90px;
            height: 90px;
            border-radius: 90px;
            position: relative;
            .user-avatar-prv{
                width: 90px;
                height: 90px;
                border-radius: 90px;
                object-fit: cover;
            }
            .user-select-ico{
                font-size: 28px;
                position: absolute;
                border-radius: 30px;
                right: 3px;
                bottom: 0px;
                z-index: 1;
                background: #d9d9d9;
                padding: 4px;
                pointer-events: none;
            }
            .user-img-select{
                background: #dedede;
                width: 35px;
                height: 30px;
                cursor: pointer !important;
                position: absolute;
                bottom: 0;
                right:0;
                opacity: 0;
            }
        }
        
        .img-up-option{
            display: flex;
            align-items: center;
            gap: 10px;
            .img-up-btn{
                display: flex;
                align-items: center;
                gap: 5px;
                background: #fff;
                border: 1px solid #ccc;
                border-radius: 4px;
                padding: 3px 15px;
                color: #3682c8;
                cursor: pointer;
                &:disabled{
                    opacity: 0.5;
                }
            }
            .lbl-file-name{
                display: inline-block;
                width: 200px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 13px;
                color: #a9a9a9;
            }
        }
        .up-info{
            h5{
                font-weight: 700;
                font-size: 16px;
                margin-bottom: 0;
            }
            p{
                color: #869EB4;
            }
        }
    }
`