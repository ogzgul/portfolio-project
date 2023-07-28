import React, { useState, useEffect } from "react";
import FeatureService from "../services/featureService";
import { Container, Header, Divider, Loader } from "semantic-ui-react";

export default function FeatureList() {
  const [features, setFeature] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    let featureService = new FeatureService();
    featureService.getFeature().then((result) => setFeature(result.data.data));
    setIsLoading(false);
  }, []);
  return (
    <div>
      {isLoading ? (
        <Loader active inline />
      ) : (
        features.map((feature) => (
          <Container text key={feature.featureID}>
            <Header
              as="h1"
              style={{
                fontWeight: "normal",
                marginBottom: 0,
              }}
            >
              {feature.header}
            </Header>
            <Header
              as="h2"
              style={{
                fontWeight: "normal",
              }}
            >
              {feature.name}
            </Header>
            <Header
              as="h2"
              style={{
                fontWeight: "normal",
              }}
            >
              {feature.title}
            </Header>
          </Container>
        ))
      )}
      <Divider></Divider>
    </div>
  );
}
