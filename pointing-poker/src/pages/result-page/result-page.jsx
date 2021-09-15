import React, { useState } from "react";
import { MainLayout } from "../../components/mainLayout/mainLayout";
import { Flex, Img } from "@chakra-ui/react";
import pencil from "../../assets/icons/pencil.png";

import IssueItem from "../../components/issues/IssueItem";

import GameCard from "../../components/cards/GameCard";
import cup from "../../assets/icons/Cup.png";
import J from "../../assets/icons/J.png";
import Q from "../../assets/icons/Q.png";
import K from "../../assets/icons/K.png";
import A from "../../assets/icons/A.png";

const fibonacciCards = ["0", "1", "2", "3", "5", "8", cup];

const TshirtsCards = ["XS", "S", "M", "L", "XL", cup];

const PlayingCards = ["6", "7", J, Q, K, A, cup];

const issuesNumbers = [13, 19, 322, 533, 666, 245, 900, 400, 3232, 455656];

export const ResultPage = () => {
  const [modalActive, setModalActive] = useState(false);
  const [currentIssue, setCurrentIssue] = useState("");
  const [isNewIssue, setIsNewIssue] = useState(false);
  const [activeIssue, setActiveIssue] = useState("");
  const [issues, setIssues] = useState([
    {
      id: 1,
      name: "issue 12",
      link: " http://jira.my-company.com/issue-12",
      priority: "middle",
    },
    {
      id: 2,
      name: "issue 13",
      link: " http://jira.my-company.com/issue-13",
      priority: "low",
    },
  ]);

  const [settingsData, setSettingsData] = useState({
    isMaster: false,
    isChanging: false,
    isTimer: false,
    scoreType: "",
    minutes: 0,
    seconds: 0,
  });

  let cards =
    settingsData.scoreType === "FN"
      ? fibonacciCards
      : settingsData.scoreType === "TS"
      ? TshirtsCards
      : PlayingCards;

  const handleOnClick = (issue) => {
    setActiveIssue(issue);
  };

  const handleDelClick = (id) => {
    setIssues(issues.filter((issue) => issue.id !== id));
  };

  const handleReviseClick = (issue) => {
    setModalActive(true);
    setCurrentIssue(issue);
  };

  return (
    <MainLayout>
      <Flex justifyContent={"center"}>
        Spring 23 planning (issues {""}
        {issuesNumbers.map((issue, index) =>
          issuesNumbers.length > index + 1 ? (
            <span key={index}>{issue}, </span>
          ) : (
            <span key={index}>{issue} </span>
          )
        )}
        )<Img src={pencil}></Img>
      </Flex>
      <Flex direction="column" justify="space-around" h="100%">
        <Flex h="350px" direction="column" justify="space-around">
          <Flex maxW="1200px" wrap="wrap">
            <IssueItem
              key={issues[0].id}
              issue={issues[0]}
              deleteClick={handleDelClick}
              revise={handleReviseClick}
              setActiveIssue={handleOnClick}
              activeIssue={activeIssue}
            />
          </Flex>
          <Flex justify="space-between" w="80%">
            {cards.map((card) => (
              <GameCard
                key={card}
                scoreType={settingsData.scoreType}
                image={card}
              />
            ))}
          </Flex>
        </Flex>
        <Flex h="350px" direction="column" justify="space-around">
          <Flex maxW="1200px" wrap="wrap">
            <IssueItem
              key={issues[1].id}
              issue={issues[1]}
              deleteClick={handleDelClick}
              revise={handleReviseClick}
              setActiveIssue={handleOnClick}
              activeIssue={activeIssue}
            />
          </Flex>
          <Flex justify="space-between" w="80%">
            {cards.map((card) => (
              <GameCard
                key={card}
                scoreType={settingsData.scoreType}
                image={card}
              />
            ))}
          </Flex>
        </Flex>
      </Flex>
    </MainLayout>
  );
};
