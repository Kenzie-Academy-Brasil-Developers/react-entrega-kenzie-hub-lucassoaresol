import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root{
        --Color-primary: #FF577F;
        --Color-primary-Focus: #FF427F;
        --Color-primary-Negative: #59323F;
        --Color-grey-4: #121214;
        --Color-grey-3: #212529;
        --Color-grey-2: #343B41;
        --Color-grey-1: #868E96;
        --Color-grey-0: #F8F9FA;
    }
    body{
        background-color: var(--Color-grey-4);
        color: var(--Color-grey-0);
    }
`