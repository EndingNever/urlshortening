import styled from 'styled-components'

export const CyanButton = styled.button`
      font-family: "Poppins";
      border: none;
      border-radius: 50px;
      background-color: hsl(180, 66%, 49%);
      color: white;
      height: 50px;
      width: 100px;
      margin-left: 12px;
      margin-top: auto;
      margin-bottom: auto;
`

export const CyanStarted = styled(CyanButton)`
margin-bottom: 0px;
margin-left: 0px;
text-align: center;
font-size: 18px;
height: 60px;
width: 175px;
`

export const MoreThanJustContainer = styled.div`
margin-top: 32px;
display: flex;
justify-content: flex-end;
font-family: "Poppins";
.left-container{
      width: 50%;
      h1{
            font-size: 80px;
            line-height: 1.2;
            margin-bottom: 0px;
      }
      h2{
            color: var(--gray);
            margin-top: 0px;
      }
}
.right-container{
      display: flex;
      justify-content: flex-end;
      width: 50%;
}

`