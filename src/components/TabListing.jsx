import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./css/tabs.css";
// import "react-tabs/style/react-tabs.css"

function TabListing() {
  return (
    <>
      <Tabs className="tablist-container">
        <TabList className="tablist-header">
          <Tab className="tablist-header-item">Governments</Tab>
          <Tab className="tablist-header-item">Franchisors</Tab>
        </TabList>

        <TabPanel className="tablist-item">
          <ul>
            <li>
              Facilitate the process of starting and maintaining a franchise
              business by providing a one-stop shop for all government-related
              franchise information and resources.
            </li>
            <br />
            <li>
              Increase the transparency and security of the franchise process
              for all parties involved by providing features such as identity
              verification, proof of funds, and legal document processing.
            </li>
            <br />
            <li>
              Provide a secure platform that can be easily updated with new
              information, resources, and features, ensuring that franchisees
              and franchisors have access to the most current information and
              support.
            </li>
            <br />
          </ul>
        </TabPanel>
        <TabPanel className="tablist-item">
          <ul>
            <li>
              Help franchisees and franchisors to reduce the time, effort, and
              money spent on legal and financial compliance by providing a
              secure and user-friendly platform that can be accessed from any
              device.
            </li>
            <br />
            <li>
              Help franchisees and franchisors to reduce the time, effort, and
              money spent on legal and financial compliance by providing a
              secure and user-friendly platform that can be accessed from any
              device.
            </li>
            <br />
            <li>
              Foster a more supportive environment for franchisees and
              franchisors by providing access to government agencies and support
              organisations that can assist with franchise-related issues.
            </li>
            <br />
          </ul>
        </TabPanel>
      </Tabs>
    </>
  );
}

export default TabListing;
