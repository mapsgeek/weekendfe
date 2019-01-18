import { Query } from "react-apollo"
import Card from "@kiwicom/orbit-components/lib/Card"
import CardSection from "@kiwicom/orbit-components/lib/Card/CardSection"
import CardSectionHeader from "@kiwicom/orbit-components/lib/Card/CardSection/CardSectionHeader"
import CardSectionContent from "@kiwicom/orbit-components/lib/Card/CardSection/CardSectionContent"

import BrnoInterests from "../queries/interests.gql"

const InterestsSample = () => (
  <>
    <Query query={BrnoInterests} context={{ uri: "https://weekend-api.now.sh/" }}>
      {({ loading, error, data }) => {
        if (error) return <div>error</div>
        if (loading) return <div>Loading</div>
        return data.interests.map(({ img, score, name, category, address }) => (
          <Card key={`${name}-${address}`}>
            <CardSection>
              <CardSectionHeader>
                <em>{category}</em> {name} [{score}]
              </CardSectionHeader>
              <CardSectionContent>
                <img src={img} alt={name} />
                <br />
                {address}
              </CardSectionContent>
            </CardSection>
          </Card>
        ))
      }}
    </Query>
  </>
)

export default InterestsSample