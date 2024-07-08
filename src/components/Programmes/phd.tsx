import React from 'react'
import { OurStudent } from '.'
import { DocumentIcon, ListBulletIcon } from '@heroicons/react/16/solid'
import { SiMinds } from 'react-icons/si'

export default function PostgraduatePhd() {
  return (
    <>
    <OurStudent
      Icon={SiMinds}
      heading={"PHILOSOPHY OF THE PROGRAMME (Ph.D)"}
      duration={
        "The Ph.D. programme of the Department of Chemistry is designed to produce well equipped chemists for various research centres, industries, and various other establishments within and outside Nigeria. The programme will also prepare graduates for teaching career in the Universities, Polytechnics, Colleges of Education and other institutions of higher learning. The courses are therefore designed to give a balanced overview of each discipline at the Ph.D level. It is hoped that the programme will enable the students on graduation to have the knowledge and acquire the skills which will equip them take full responsibilities of management in industrial establishment, research and academic institutions."
      }
    />
    <OurStudent
      Icon={ListBulletIcon}
      heading={"OBJECTIVES OF THE PROGRAMME (Ph.D)"}
      duration={`In line with the vision of the University of Uyo, the department shall strive towards sustainable human and technological development through the utilization of the vast natural resources available within its environs in teaching, research and community service while maintaining a good conducive and friendly environment for life. To actualise this vision, the department shall lay emphasis on academic and research-oriented programmes that will lead to personal and project development such as:\nTraining the students in advanced contemporary methods that will equip them to carry out researches in their areas of specialization.\nEquipping the students with skills that will enable them identify, analyze and control wastes in the environment.\nModifying locally available raw materials and wastes into industrial input.\nSynthesizing and/or formulating new industrial and commercial products using locally available feedstock.\nUtilizing available natural resources/solid minerals to manufacture materials needed for the upkeep of man.\nTraining of qualified chemists for secondary school system, research institutions and industries as well as meeting the manpower requirements of non-academic institutions.`}
    />
    <OurStudent
      Icon={DocumentIcon}
      heading={"ADMISSION REQUIREMENTS (Ph.D)"}
      duration={`Admission is open to candidates with M.Sc. degree from the University of Uyo or any other recognized university within and outside Nigeria recognize and approved by the Senate of the must have had five credit passes including University of Uyo. Such prospective students Chemistry, Physics, English Language and Mathematics at the School Certificate level. Candidates must have successfully completed a degree programme or its equivalent in the corresponding area of study at M.Sc. level and must have passed at a level not lower than B. Choice of courses to be offered shall depend on the candidate's performance at the M.Sc. level and on the transcript.`}
    />
  </>
  )
}
