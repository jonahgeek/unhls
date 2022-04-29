import { ContentLayout } from '@/components/Layout';
// import { useAuth } from '@/lib/auth';

import FacilitiesErrorsChart from './components/charts/ErrorsFacilitiesChart.jsx';
import FacilitiesTestsChart from './components/charts/FacilitiesTestsChart';
import PositivesTotalsChart from './components/charts/PositivesTotalsChart';
import { RegisterPatient } from './components/RegisterPatient.jsx';

export const Dashboard = () => {
  // const { user } = useAuth();
  return (
    <ContentLayout title="QA Dashboard - Uganda National Health Laboratory Services (UNHLS)">
      <div clasName="flex flex-row align-content-center">
        <div className="flex justify-end">
          <RegisterPatient />
        </div>
      </div>
      <div className="mt-4 mb-2 text-xs text-gray-400 mx-4">Timeframe Filters</div>
      <div className="bg-white rounded-2xl shadow flex flex-row">
        <div className="grid grid-cols-4 gap-2 py-2 mx-4">
          <div className="">
            <span className="text-xs text-gray-500">Total Tests</span>
            <br />
            <div className="flex flex-row space-x-2">
              <select className="bg-gray-200 p-2 rounded-md text-xs">
                <option selected>- Total From</option>
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
                <option>2019</option>
                <option>2018</option>
                <option>2017</option>
                <option>2016</option>
                <option>2015</option>
              </select>

              <select className="bg-gray-200 p-2 rounded-md text-xs">
                <option selected>- Total From</option>
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
                <option>2019</option>
                <option>2018</option>
                <option>2017</option>
                <option>2016</option>
                <option>2015</option>
              </select>
            </div>
          </div>
          <div className="">
            <span className="text-xs text-gray-400">Total Positive</span>
            <br />
            <div className="flex flex-row space-x-2">
              <select className="bg-gray-200 p-2 rounded-md text-xs">
                <option selected>- Total From</option>
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
                <option>2019</option>
                <option>2018</option>
                <option>2017</option>
                <option>2016</option>
                <option>2015</option>
              </select>

              <select className="bg-gray-200 p-2 rounded-md text-xs">
                <option selected>- Total From</option>
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
                <option>2019</option>
                <option>2018</option>
                <option>2017</option>
                <option>2016</option>
                <option>2015</option>
              </select>
            </div>
          </div>
          <div className="">
            <span className="text-xs text-gray-400">Total Errors</span>
            <br />
            <div className="flex flex-row space-x-2">
              <select className="bg-gray-200 p-2 rounded-md text-xs">
                <option selected>- Total From</option>
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
                <option>2019</option>
                <option>2018</option>
                <option>2017</option>
                <option>2016</option>
                <option>2015</option>
              </select>

              <select className="bg-gray-200 p-2 rounded-md text-xs">
                <option selected>- Total From</option>
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
                <option>2019</option>
                <option>2018</option>
                <option>2017</option>
                <option>2016</option>
                <option>2015</option>
              </select>
            </div>
          </div>
          <div className="">
            <span className="text-xs text-gray-400">RR Cases</span>
            <br />
            <div className="flex flex-row space-x-2">
              <select className="bg-gray-200 p-2 rounded-md text-xs">
                <option selected>- Total From</option>
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
                <option>2019</option>
                <option>2018</option>
                <option>2017</option>
                <option>2016</option>
                <option>2015</option>
              </select>

              <select className="bg-gray-200 p-2 rounded-md text-xs">
                <option selected>- Total From</option>
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
                <option>2019</option>
                <option>2018</option>
                <option>2017</option>
                <option>2016</option>
                <option>2015</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 rounded-2xl shadow mt-6 mb-4">
        <PositivesTotalsChart />
      </div>
      <div className="bg-white p-4 rounded-2xl shadow mt-6 mb-4">
        <FacilitiesTestsChart />
      </div>
      <div className="bg-white p-4 rounded-2xl shadow mt-6 mb-4">
        <FacilitiesErrorsChart />
      </div>
    </ContentLayout>
  );
};
