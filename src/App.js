import React, { useEffect } from 'react';
import Table, { AvatarCell, SelectColumnFilter, StatusPill } from './Table';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import * as Contracts from './contracts';


export default function App() {
  useEffect(() => {
    document.title = 'Aldeeran | NASA Contracts';
  }, []);

  return (
    <Router>
      <div className="bg-gray-100 font-ibm">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-24 lg:px-32">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/reference" element={<Reference />} />
            <Route path="/FY22" element={<FY22 />} />
            <Route path="/FY21" element={<FY21 />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

function Header() {
  return (
    <header class="py-12 flex justify-between">
      <div className="mr-6 block">
        <Link to="/" className="text-2xl font-semibold">Alderaan</Link>
        <div class="text-gray-400">NASA Contracts Explorer</div>
      </div>
      <ul class="flex list-none">
        <li class="ml-16 my-2">
          <Link to="/reference">Reference</Link>
        </li>
        <li class="ml-16 my-2">
          <Link to="/about">About</Link>
        </li>
        <li class="ml-16 my-2">
          <Link to="/FY22">FY22</Link>
        </li>
      </ul>
    </header>
  )
}

function Home() {

  return (
    <div className="text-gray-900">
      <div className="mt-12">
        Search through all government contracts awarded by NASA, from FY 2005 to FY 2022. Use the <strong>search</strong> tool to find matches with all data fields. You can also <strong>sort</strong> rows by ascending/descending order using the sort toggle. Go to the reference page for more information about the different data fields.</div>
      <div className="mt-6 flex justify-between">
        <ul class="flex list-none">
          <li class="my-2">
            <Link to="/FY22">FY22</Link>
          </li>
          <li class="ml-16 my-2">
            <Link to="/FY21">FY21</Link>
          </li>
          <li class="ml-16 my-2">
            <Link to="/FY20">FY20</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

function Reference() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <div className="font-semibold text-xl">
        Reference
      </div>
      <div className="mt-2">
        A glossary of the terms used in the data tables (adapted from NASA's definitions).
        <div className="mt-12">
          <strong>Contractor</strong>
          <p>Any vendor with an active award during the fiscal year with NASA. Awards include all contracts with a value greater than $25k.</p>
        </div>
        <div className="mt-6">
          <strong>Contract Number</strong>
          <p>The unique identification of a contract, assistance award, cooperative agreement or space act agreement and any purchase order with a value greater than $25k.</p>
        </div>
        <div className="mt-6">
          <strong>NASA Center</strong>
          <p>The NASA center which administers the award instrument.</p>
        </div>
        <div className="mt-6">
          <strong>City</strong>
          <p>The city where the contractor will perform the requirements of the contract.</p>
        </div>
        <div className="mt-6">
          <strong>State</strong>
          <p>The state where the contractor will perform the requirements of the contract.</p>
        </div>
        <div className="mt-6">
          <strong>Award Date</strong>
          <p>Date of commitment to the contractor, i.e. date the contract is signed by the government.</p>
        </div>
        <div className="mt-6">
          <strong>Completion Date</strong>
          <p>The end date of the contract period of performance when all the work on the contract and all modifications thereto is scheduled for completion. Any unexercised options remaining on this contract are not reflected.</p>
        </div>
        <div className="mt-6">
          <strong>Current FY Obligations</strong>
          <p>The amount of money that the government has obligated during the current fiscal year to a specific contract for subsequent costing/payment for supplies or services accepted by the government.</p>
        </div>
        <div className="mt-6">
          <strong>Total Obligations</strong>
          <p>The amount of money that the government has obligated, since award through the time period requested, to a specific contract for subsequent costing/payment for supplies or services accepted by the government.</p>
        </div>
        <div className="mt-6">
          <strong>Total Award Value</strong>
          <p>The total contractual amount that the business or grantee and the Government have agreed upon including all deliverables and exercised options.</p>
        </div>
        <div className="mt-6 pb-12">
          <strong>Description</strong>
          <p>A brief description of the contract awarded is to provide to the government.</p>
        </div>
      </div>
    </div>
  )
}

function About() {
  return <h2>About</h2>;
}

function Footer() {
  return (
    <div class="font-ibm py-12 bg-gray-100 text-xs">
      <div class="text-center">
        Created by <a href="https://olafwillner.com">Olaf Willner</a>
      </div>
    </div>
  )
}

function FY22() {
  const columns = React.useMemo(() => [
    {
      Header: "Contractor",
      accessor: "contractor",
    },
    {
      Header: "Contract Number",
      accessor: "contract_number",
    },
    {
      Header: "NASA Center",
      accessor: "center",
    },
    {
      Header: "City",
      accessor: "city",
    },
    {
      Header: "State",
      accessor: "state",
    },
    {
      Header: "Award Date",
      accessor: "award_date",
    },
    {
      Header: "Completion Date",
      accessor: "completion_date",
    },
    {
      Header: "Current FY Obligations",
      accessor: "current_fy_obligations",
    },
    {
      Header: "Total Obligations",
      accessor: "total_obligations",
    },
    {
      Header: "Total Award Value",
      accessor: "total_award_value",
    },
    {
      Header: "Description of Contract",
      accessor: "description",
    },
  ], [])

  const data = React.useMemo(() => Contracts.getFY22(), [])

  return (
    <>
      <Home />
      <div className="mt-6">
        <Table columns={columns} data={data} />
      </div>
    </>

  )
}

function FY21() {
  const columns = React.useMemo(() => [
    {
      Header: "Contractor",
      accessor: "contractor",
    },
    {
      Header: "Contract Number",
      accessor: "contract_number",
    },
    {
      Header: "NASA Center",
      accessor: "center",
    },
    {
      Header: "City",
      accessor: "city",
    },
    {
      Header: "State",
      accessor: "state",
    },
    {
      Header: "Award Date",
      accessor: "award_date",
    },
    {
      Header: "Completion Date",
      accessor: "completion_date",
    },
    {
      Header: "Current FY Obligations",
      accessor: "current_fy_obligations",
    },
    {
      Header: "Total Obligations",
      accessor: "total_obligations",
    },
    {
      Header: "Total Award Value",
      accessor: "total_award_value",
    },
    {
      Header: "Description of Contract",
      accessor: "description",
    },
  ], [])

  const data = React.useMemo(() => Contracts.getFY21(), [])

  return (
    <>
      <Home />
      <div className="mt-6">
        <Table columns={columns} data={data} />
      </div>
    </>

  )
}

