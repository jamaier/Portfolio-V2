
import { services } from "../data"
import { GetServerSidePropsContext } from "next"

const About = () => {
  return (
  <div>
    ABOUT
  </div>
  )
}

export default About


// export const getStaticProps = (context:GetServerSidePropsContext) => {

//   return {
//     props: {   
//       services: data.services
//     }
//   }
// }
