import "./Footer.css";

export const Footer = () => {

  function GetNowYear(){

    const date = new Date();

    const getYear = date.getFullYear();

    return getYear;

  }

  return (

    <footer>

        <p>{GetNowYear()} - TaskMate</p>

    </footer>

  )

}
