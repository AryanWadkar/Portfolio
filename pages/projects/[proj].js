import ProjDetail from "../../components/projectdetails";
import { useRouter } from 'next/router';
import data from "../../public/content"


export default function ProjectDesc(props){
    const router = useRouter();
    if (props.hasError) {
        return <h1>Error : Invalid Route</h1>
      }
    
      if (router.isFallback) {
          return <h1>Loading...</h1>
      }

      return (
        <ProjDetail content={props.projcontent}/>
      )
}

export const getStaticPaths= async () => {
    const pathsWithParams = data.projects.map((star) => ({ params: { proj: star.id }}))

    return {
        paths: pathsWithParams,
        fallback: true
    }
}

export const getStaticProps= async (context) => {
    const itemID = context.params?.proj;
    let foundItem = data.projects.find((item) => itemID === item.id);
    if (!foundItem) {
      return {
        props: { hasError: true },
      }
  }
  
  return {
    props: {
        projcontent: foundItem
    }
  }
}
