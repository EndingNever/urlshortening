import styled from 'styled-components'
import bg from "../src/images/bg-shorten-desktop.svg"

export const CyanButton = styled.button`
cursor: pointer;
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
cursor: pointer;
margin-bottom: 0px;
margin-left: 0px;
text-align: center;
font-size: 18px;
height: 60px;
width: 175px;
`

export const MoreThanJustContainer = styled.div`
margin-right: auto;
margin-left: auto;
width: 75vw;
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
            color: gray;
            margin-top: 0px;
            margin-bottom: 28px;
            width: 68%;
      }
}
.right-container{
      display: flex;
      justify-content: flex-end;
      width: 50%;
}
`
export const GrayContainer = styled.div`
background-color: var(--grayish);
margin-top: 180px;
width: 100vw;
`

export const UrlContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 75vw;
  .input-container{
        background-color: var(--very-dark-violet);
        background-image: url(${bg});
        background-size: cover;
        background-position: center 10%;
        background-repeat: no-repeat;
        border-radius: 20px;
        padding: 60px;
        position: relative;
        bottom: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        input{
              font-family: "Poppins", sans-serif;
            border-radius: 15px;
            border: none;
            color: gray;
            font-size: 20px;
              padding: 30px;
              width: 75%;
        }
        .input-button{
              font-family: "Poppins", sans-serif;
              font-size: 24px;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 15px;
              padding: 43px;
              width: 20%;
            text-align: center;
        }
  }
`
