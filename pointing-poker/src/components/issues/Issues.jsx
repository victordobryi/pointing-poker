<<<<<<< HEAD
import React, { useState } from "react";
=======
import React, {useState} from "react";
>>>>>>> develop
import { Box, Heading, Flex } from "@chakra-ui/react";
import IssueItem from "./IssueItem";
import AddIssue from "./AddIssues";
import NoIssuesCard from "./NoIssuesCard";
<<<<<<< HEAD
import { ReviseIssueModal } from "../modals/ReviseIssueModal";
import { Modal } from "../modal/modal";

const Issues = () => {
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
    {
      id: 3,
      name: "issue 14",
      link: " http://jira.my-company.com/issue-14",
      priority: "height",
    },
  ]);

  const handleOnClick = (issue) => {
    setActiveIssue(issue);
  };

  const handleDelClick = (id) => {
    setIssues(issues.filter((issue) => issue.id !== id));
  };
=======
import {ReviseIssueModal} from '../modals/ReviseIssueModal';
import {Modal} from '../modal/modal';

const Issues = () => {
  const EMPTYISSUE = {
        id: '',
        name: '',
        link: '',
        priority: ''
      }
  const [modalActive, setModalActive] = useState(false);
  const [currentIssue, setCurrentIssue] = useState(EMPTYISSUE);
  const [isNewIssue, setIsNewIssue] = useState(false);
  const [issues, setIssues] = useState(
    [
      {
        id: 1,
        name: 'issue 12',
        link: ' http://jira.my-company.com/issue-12',
        priority: 'middle',
      },
      {
        id: 2,
        name: 'issue 13',
        link: ' http://jira.my-company.com/issue-13',
        priority: 'low'
      },
      {
        id: 3,
        name: 'issue 14',
        link: ' http://jira.my-company.com/issue-14',
        priority: 'height'
      },
    ]
  )

  const handleDelClick = (id) => {
    setIssues(issues.filter((issue) => issue.id !== id));
  }
>>>>>>> develop

  const handleReviseClick = (issue) => {
    setModalActive(true);
    setCurrentIssue(issue);
<<<<<<< HEAD
  };

  const handleAddIssueClick = () => {
    setCurrentIssue("");
    setIsNewIssue(true);
    setModalActive(true);
  };

  const handleCloseClick = () => {
    setCurrentIssue("");
    setModalActive(false);
  };
=======
  }

  const handleAddIssueClick = () => {
    setCurrentIssue(EMPTYISSUE);
    setIsNewIssue(true);
    setModalActive(true);
  }

  const handleCloseClick = () => {
    setCurrentIssue(EMPTYISSUE);
    setModalActive(false);
  }
>>>>>>> develop

  const handleRevise = () => {
    const currArr = [];
    issues.forEach((issue) => {
      if (issue.id !== currentIssue.id) {
        currArr.push(issue);
      } else currArr.push(currentIssue);
    });
    if (isNewIssue) {
      currArr.push(currentIssue);
      setIsNewIssue(false);
    }
    setIssues(currArr);
<<<<<<< HEAD
  };
=======
  }
>>>>>>> develop

  return (
    <Box maxW="1200px" mt="20px">
      <Heading as="h5" size="lg" textAlign="center" mb="30px">
        Issues:
      </Heading>
      <Flex maxW="1200px" wrap="wrap">
<<<<<<< HEAD
        {issues.length ? (
          issues.map((item) => (
            <IssueItem
              key={item.id}
              issue={item}
              deleteClick={handleDelClick}
              revise={handleReviseClick}
              setActiveIssue={handleOnClick}
              activeIssue={activeIssue}
            />
          ))
        ) : (
          <NoIssuesCard />
        )}
        <AddIssue addClick={handleAddIssueClick} />
      </Flex>
      <Modal active={modalActive} setActive={setModalActive}>
        <ReviseIssueModal
          issue={currentIssue}
          setCurrentIssue={setCurrentIssue}
          onClose={handleCloseClick}
=======
        { issues.length
          ? issues.map((item) => 
              <IssueItem 
                key={item.id} 
                issue={item} 
                deleteClick={handleDelClick}
                revise={handleReviseClick}
              />)
          : <NoIssuesCard/>
        }
        <AddIssue addClick={handleAddIssueClick}/>
      </Flex>
      <Modal active={modalActive} setActive={setModalActive}>
        <ReviseIssueModal 
          issue={currentIssue} 
          setCurrentIssue={setCurrentIssue} 
          onClose={handleCloseClick} 
>>>>>>> develop
          onRevise={handleRevise}
        />
      </Modal>
    </Box>
  );
};

<<<<<<< HEAD
export default Issues;
=======
export default Issues;
>>>>>>> develop
