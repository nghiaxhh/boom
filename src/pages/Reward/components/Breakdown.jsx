import React from 'react'

function Breakdown() {
  return (
    <div>
      <table>
        <tr>
          <th> </th>
          <th>Match</th>
          <th>Points</th>
          <th>Boosted Point</th>
          <th>Total</th>
        </tr>

        <tr>
          <td>
            <div>
              <div>Win a match </div>
              <div className="text-[10px]">Earn 10 points per match </div>
            </div>
          </td>
          <td className="text-center align-middle">125</td>
          <td className="text-center align-middle">3,000,000</td>
          <td className="text-center align-middle">3,000,000</td>
          <td className="text-center align-middle">6,000,000</td>
        </tr>
        <tr>
          <td>
            <div>
              <div>Play 10 matches</div>
              <div className="text-[10px]">
                Earn 10 points by playing 10 matches. Once per day
              </div>
            </div>
          </td>
          <td className="text-center align-middle">125</td>
          <td className="text-center align-middle">3,000,000</td>
          <td className="text-center align-middle">3,000,000</td>
          <td className="text-center align-middle">6,000,000</td>
        </tr>
        <tr>
          <td>
            <div>
              <div>Play 20 matches</div>
              <div className="text-[10px]">Earn 20 points per match </div>
            </div>
          </td>
          <td className="text-center align-middle">125</td>
          <td className="text-center align-middle">3,000,000</td>
          <td className="text-center align-middle">3,000,000</td>
          <td className="text-center align-middle">6,000,000</td>
        </tr>
      </table>
    </div>
  )
}

export default Breakdown
