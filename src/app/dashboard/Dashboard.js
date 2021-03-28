import React from "react";
import styled from "styled-components";
import COLORS from "../../constants/colors";
import Page from "../../components/Page";
import Grid from "../../components/Grid";
import Card from "../../components/Card";

const Container = styled.div``;

const infoItems = [
  { title: "Reports", icon: "speaker", number: 36, color: COLORS.green },
  {
    title: "Moneeey",
    icon: "money-bag-pound",
    number: "$ 45,275",
    color: COLORS.yellow
  },
  {
    title: "Average distance",
    icon: "bicycle",
    number: "25, 236",
    color: COLORS.main
  },
  { title: "Dislikes", icon: "thumbs-down", number: 679, color: COLORS.red }
];

const Dashboard = () => {
  return (
    <Container>
      <Page>
        <Page.Title>Dashboard</Page.Title>
        <Grid
          gap="20px"
          rows="100px 100px 100px 100px 100px 100px 100px"
          columns="1fr 1fr 1fr 1fr"
          areas={`
            'info1 info2 graph graph'
            'info3 info4 graph graph'
            'weather calendar rise rise'
            'weather calendar rise rise'
            'map map map map'
            'map map map map'
            'map map map map'
          `}
        >
          {infoItems.map((item, idx) => (
            <Card.Info
              title={item.title}
              number={item.number}
              icon={item.icon}
              color={item.color}
              style={{ gridArea: `info${idx + 1}` }}
            >
              {item.title}
            </Card.Info>
          ))}
          <Card style={{ gridArea: "graph" }} />
          <Card style={{ gridArea: "weather" }} />
          <Card style={{ gridArea: "calendar" }} />
          <Card style={{ gridArea: "rise" }} />
          <Card style={{ gridArea: "map" }} />
        </Grid>
      </Page>
    </Container>
  );
};

export default Dashboard;
