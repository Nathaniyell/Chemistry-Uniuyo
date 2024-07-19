import React from 'react';

interface OldTableData {
  sn: number;
  name: string;
  regNumber: string;
  topic: string;
  supervisor: string;
}

interface NewTableData {
  sn: number;
  name: string;
  regNumber: string;
  classification: string; // Using classification instead of topic/supervisor
}

type TableData = OldTableData | NewTableData;

interface TablePropTypes {
  tableData: TableData[];
}

const StudentsTable = ({ tableData }: TablePropTypes) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300 border-collapse">
        <thead>
          <tr className='border-2'>
            <th className="py-2 px-4 border-2">S/N</th>
            <th className="py-2 px-4 border-2">STUDENT&apos;S NAME</th>
            <th className="py-2 px-4 border-2">REGISTRATION NUMBER</th>
            {tableData.length > 0 && 'topic' in tableData[0] ? (
              <>
                <th className="py-2 px-4 border-2">PROJECT&apos;S TOPIC</th>
                <th className="py-2 px-4 border-2">SUPERVISOR</th>
              </>
            ) : (
              <th className="py-2 px-4 border-2">CLASSIFICATION</th>
            )}
          </tr>
        </thead>
        <tbody>
          {tableData.map((student, index) => (
            <tr key={index} className="border-2">
              <td className="py-2 px-4 border-2">{student.sn}</td>
              <td className="py-2 px-4 border-2">{student.name}</td>
              <td className="py-2 px-4 border-2">{student.regNumber}</td>
              {'topic' in student ? (
                <>
                  <td className="py-2 px-4 border-2">{student.topic}</td>
                  <td className="py-2 px-4 border-2">{student.supervisor}</td>
                </>
              ) : (
                <td className="py-2 px-4 border-2">{student.classification}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsTable;
