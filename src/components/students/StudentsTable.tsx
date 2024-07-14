import React from 'react';



interface TablePropTypes {
  tableData: {
    sn: number;
    name: string;
    regNumber: string;
    topic: string;
    supervisor: string;
  }[]
}
const StudentsTable = ({ tableData }: TablePropTypes) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300 border-collapse">
        <thead>
          <tr className='border-2'>
            <th className="py-2 px-4 border-2">S/N</th>
            <th className="py-2 px-4 border-2">STUDENT&apos;S NAME</th>
            <th className="py-2 px-4  border-2">REGISTRATION NUMBER</th>
            <th className="py-2 px-4  border-2">PROJECT&apos;S TOPIC</th>
            <th className="py-2 px-4  border-2">SUPERVISOR</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((project, index) => (
            <tr key={index} className="border-2">
              <td className="py-2 px-4 border-2">{project.sn}</td>
              <td className="py-2 px-4 border-2">{project.name}</td>
              <td className="py-2 px-4 border-2">{project.regNumber}</td>
              <td className="py-2 px-4 border-2">{project.topic}</td>
              <td className="py-2 px-4 border-2">{project.supervisor}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default StudentsTable;
