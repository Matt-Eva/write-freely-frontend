import ContentCard from "./ContentCard";
import styled from 'styled-components'

function Display({creations, setViewItem, user, path}) {
    const display = creations.map(creation => <ContentCard user ={user} path={path} creation={creation} setViewItem={setViewItem} key={creation.id}/>)
    return(
        <BrowseWriting>
            {display}
        </BrowseWriting>
    )
}

export default Display;

const BrowseWriting = styled.div`
 margin: 0px 10px 10px 230px;
  padding: 10px 10px 10px 10px;
  display: flex;
  flex-wrap: wrap;
  /* width: 800px; */
  background-color: hsl(0, 0%, 95%);
  border-radius: 5px;   
  border: double;
  border-width: 4px;

  div:hover {
    background-color: hsl(210, 50%, 95%);
  border-color: hsl(180, 50%, 20%);
  }
`