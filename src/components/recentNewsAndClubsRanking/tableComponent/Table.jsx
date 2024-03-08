import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import mancity from '../../../assets/images/Mancity.png'
import liverpool from '../../../assets/images/liverpool.png'
import chelsea from '../../../assets/images/Chelsea.png'
import totenham from '../../../assets/images/totenham.png'
import arsenal from '../../../assets/images/arsenal.png'
import manutd from '../../../assets/images/manutd.png'
import './Table.scss'




const rows = [
  {
    id: 1,
    logo: mancity,
    clubname: "Manchester City",
    GP: 38,
    W: 29,
    D: 6,
    L: 3,
    F: 99,
    A: 26,
    GD: 73

  },
  {
    id: 2,
    logo: liverpool,
    clubname: "Liverpool",
    GP: 38,
    W: 28,
    D: 8,
    L: 2,
    F: 94,
    A: 26,
    GD: 68

  },
  {
    id: 3,
    logo: chelsea,
    clubname: "Chelsea",
    GP: 38,
    W: 21,
    D: 11,
    L: 6,
    F: 76,
    A: 33,
    GD: 43

  },
  {
    id: 4,
    logo: totenham,
    clubname: "Tottenharm Hotspur",
    GP: 38,
    W: 22,
    D: 5,
    L: 11,
    F: 69,
    A: 40,
    GD: 29

  },
  {
    id: 5,
    logo: arsenal,
    clubname: "Arsenal",
    GP: 38,
    W: 22,
    D: 3,
    L: 13,
    F: 61,
    A: 48,
    GD: 13

  },
  {
    id: 6,
    logo: manutd,
    clubname: "Manchester United",
    GP: 38,
    W: 16,
    D: 10,
    L: 12,
    F: 57,
    A: 57,
    GD: 0

  }
];

export default function BasicTable() {
  return (
    <div className="tContainer">
      <table style={{ height: '285px', width: '510px' }}>
        <thead>
          <tr className="tr">
            <th className="thead">Club</th>
            <th className="thead">GP</th>
            <th className="thead">W</th>
            <th className="thead">D</th>
            <th className="thead">L</th>
            <th className="thead">F</th>
            <th className="thead">A</th>
            <th className="thead">GD</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name} className="tr">
              <td className="tcell">
                <div className="firstcell">
                  <div className="slno">
                  {row.id}
                  </div>
                  <img src={row.logo} alt="" className="cellimg" />
                  <div className="clubname">{row.clubname}</div>
                </div>
              </td>
              <td className='td' >{row.GP}</td>
              <td className='td' >{row.W}</td>
              <td className='td'>{row.D}</td>
              <td className='td' >{row.L}</td>
              <td className='td' >{row.F}</td>
              <td className='td' >{row.A}</td>
              <td className='td' >{row.GD}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  );
}