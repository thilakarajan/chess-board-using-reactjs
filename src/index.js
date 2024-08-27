import { createRoot } from 'react-dom/client'

import './index.css'

import { TbChessRookFilled } from 'react-icons/tb'
import { TbChessKnightFilled } from 'react-icons/tb'
import { TbChessBishopFilled } from 'react-icons/tb'
import { TbChessKingFilled } from 'react-icons/tb'
import { TbChessQueenFilled } from 'react-icons/tb'
import { TbChessFilled } from 'react-icons/tb'



const Black = [
  'darkcyan',
  'rgb(107, 223, 223)',
  'darkcyan',
  'rgb(107, 223, 223)',
  'darkcyan',
  'rgb(107, 223, 223)',
  'darkcyan',
  'rgb(107, 223, 223)',
]
const White = [
  'rgb(107, 223, 223)',
  'darkcyan',
  'rgb(107, 223, 223)',
  'darkcyan',
  'rgb(107, 223, 223)',
  'darkcyan',
  'rgb(107, 223, 223)',
  'darkcyan',
]

const row1 = [
  <TbChessRookFilled />,
  <TbChessKnightFilled />,
  <TbChessBishopFilled />,
  <TbChessKingFilled />,
  <TbChessQueenFilled />,
  <TbChessBishopFilled />,
  <TbChessKnightFilled />,
  <TbChessRookFilled />,
]

const Chess = () => {
  return (
    <div className="chess">
      <table>
        <tbody>
          <tr>
            {Black.map((color, index) => {
              return (
                <td key={index} style={{ backgroundColor: color }}>
                  <p style={{color:'black',fontSize:'30px'}}>{row1[index]}</p>
                </td>
              )
            })}
          </tr>
          <tr>
            {White.map((color, index) => {
              return (
                <td key={index} style={{ backgroundColor: color }}>
                  <p style={{ color: 'black', fontSize: '30px' }}>
                    <TbChessFilled />
                  </p>
                </td>
              )
            })}
          </tr>
          <tr>
            {Black.map((color, index) => {
              return <td key={index} style={{ backgroundColor: color }}></td>
            })}
          </tr>
          <tr>
            {White.map((color, index) => {
              return <td key={index} style={{ backgroundColor: color }}></td>
            })}
          </tr>
          <tr>
            {Black.map((color, index) => {
              return <td key={index} style={{ backgroundColor: color }}></td>
            })}
          </tr>
          <tr>
            {White.map((color, index) => {
              return <td key={index} style={{ backgroundColor: color }}></td>
            })}
          </tr>
          <tr>
            {Black.map((color, index) => {
              return (
                <td key={index} style={{ backgroundColor: color }}>
                  <p style={{ color: 'white', fontSize: '30px' }}>
                    <TbChessFilled />
                  </p>
                </td>
              )
            })}
          </tr>
          <tr>
            {White.map((color, index) => {
              return (
                <td key={index} style={{ backgroundColor: color }}>
                  <p style={{ color: 'white', fontSize: '30px' }}>
                    {row1[7-index]}
                  </p>
                </td>
              )
            })}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<Chess />)
