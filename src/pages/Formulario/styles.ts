import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    max-width: 1120px;
    margin: 50px auto;

    .content {
        display: flex;
        justify-content: center;
        flex-direction: column;

        padding: 50px;
        background: #FDF2F1;
        border-radius: 5px;
    }

    .content form h1 {
        display: flex;
        justify-content: center;
    }

    .content form h3 {
        margin-top: 20px;
        line-height: 40px;
        color: #000000;
    } 

    .content form h5 {
        line-height: 40px;
        color: #6C6C80;
    } 

    .content form .input-group {
        flex: 1;
        display: flex;
    }

    .content form .input {
        flex: 1;

        display: flex;
        flex-direction: column;
        margin-bottom: 24px;
        margin-right: 20px;
    }

    .content form input[type=text] {
        flex: 1;
        background: #FFFFFF;
        border-radius: 5px;
        border: 0;
        padding: 16px 24px;
        font-size: 16px;
        color: #6C6C80;
        width: 100%;
    }

    .content form button {
        margin-top: 40px;
        width: 100%;
        height: 60px;
        background: #FF6363;
        border: 0;
        border-radius: 5px;
        color: #FFFFFF;
        font-weight: 700;
        display: inline-block;
        text-align: center;
        text-decoration: none;
        font-size: 18px;
        line-height: 60px;
        transition: filter 0.2s;
    }

    .content form button:hover {
        filter: brightness(90%);
    }

`;